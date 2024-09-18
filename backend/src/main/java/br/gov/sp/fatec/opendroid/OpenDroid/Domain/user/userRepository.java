package br.gov.sp.fatec.opendroid.OpenDroid.Domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<user, String> {
    user findByEmail(String email);
}
