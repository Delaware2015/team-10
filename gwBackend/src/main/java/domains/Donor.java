package domains;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by syoung on 10.31.15.
 */
@Entity
public class Donor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull
    @Column (name="email", unique=true)
    private String email;
    @NotNull
    private String zipcode;

    private String name;
    @NotNull
    private String password;

    public Donor(){}

    public Donor(String _email, String _zipcode, String _password, String _name){
        this.email = _email;
        this.zipcode = _zipcode;
        this.name = _name;
        this.password = _password;
    }

    public Donor(String _email, String _zipcode, String _password){
        this.email = _email;
        this.zipcode = _zipcode;
        this.password = _password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
