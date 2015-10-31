package hello;

import domains.Donor;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import repositories.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.sql.DataSource;

@RestController
public class HelloController {

    private DonorRepository donorRepository;

//    @Bean
//    @ConfigurationProperties(prefix="spring.datasource")
//    public DataSource dataSource (){
//        return DataSourceBuilder.create().build();
//    }
    @Autowired
    public void setDonorRepository(DonorRepository donorRepository) {
        this.donorRepository = donorRepository;
    }
    
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @RequestMapping("/create")
    @ResponseBody
    public Donor create(String email, String zipcode, String password) {
        Donor donor = null;

        try {
            donor = new Donor(email, zipcode, password);
            donorRepository.save(donor);
        } catch (Exception e) {
            e.printStackTrace();
//            return "Error creating donor: " + e.toString();
            System.out.println(e.toString());
        }

        return donor;
    }


    @RequestMapping("/read")
    @ResponseBody
    public Donor read(String email) {
        String result;
        Donor donor = null;

        try {

            donor = donorRepository.findByEmail(email);
            result = "test: " + donor.getEmail();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.toString());
        }

        return donor;
    }
}
