package hello;

import domains.Donor;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import repositories.DonorRepository;

import java.math.BigDecimal;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = {RepositoryConfiguration.class})
public class DonorRepositoryTest {

    private DonorRepository donorRepository;

    @Autowired
    public void setDonorRepository(DonorRepository donorRepository) {
        this.donorRepository = donorRepository;
    }

    @Test
    public void testReadDonor(){
//        Donor donor = new Donor();
//        donor.setEmail("ffeafff");
//        donor.setZipcode("19713");
//        donor.setPassword("password");
//        donorRepository.save(donor);
//        Donor result = donorRepository.findOne(1L);
//        System.out.println("id: " + result.getEmail());
//        Iterable<Donor> result = donorRepository.findAll();
//        while (result.iterator().hasNext()) {
//            System.out.println("zip code: " + result.iterator().next().getZipcode());
//        }
    }
    @Test
    public void testSaveDonor(){
        //setup donor
//        Donor donor = new Donor();
//        donor.setEmail("efeaf");
//        donor.setZipcode("19713");
//        donor.setPassword("password");
//        //donor.setId(Integer.toUnsignedLong(1));
//
//
//        //save donor, verify has ID value after save
//        //assertNotNull(donor.getId()); //null before save
//        donorRepository.save(donor);
//        assertNotNull(donor.getId()); //not null after save

        //fetch from DB
//        Donor fetchedDonor = donorRepository.findOne(donor.getId());

//        //should not be null
//        assertNotNull(fetchedDonor);
//
//        //should equal
//        assertEquals(donor.getId(), fetchedDonor.getId());
//        assertEquals(donor.getDescription(), fetchedDonor.getDescription());
//
//        //update description and save
//        fetchedDonor.setDescription("New Description");
//        donorRepository.save(fetchedDonor);
//
//        //get from DB, should be updated
//        Donor fetchedUpdatedDonor = donorRepository.findOne(fetchedDonor.getId());
//        assertEquals(fetchedDonor.getDescription(), fetchedUpdatedDonor.getDescription());
//
//        //verify count of donors in DB
//        long donorCount = donorRepository.count();
//        assertEquals(donorCount, 1);
//
//        //get all donors, list should only have one
//        Iterable<Donor> donors = donorRepository.findAll();
//
//        int count = 0;
//
//        for(Donor p : donors){
//            count++;
//        }
//
//        assertEquals(count, 1);
    }
}