package repositories;

import domains.Donor;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by syoung on 10.30.15.
 */
public interface DonorRepository extends CrudRepository <Donor, Long> {
    Donor findByEmail(String email);

}
