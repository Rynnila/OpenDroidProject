package br.gov.sp.fatec.opendroid.OpenDroid.Repository;

import br.gov.sp.fatec.opendroid.OpenDroid.Model.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    @Query("SELECT u FROM Usuario u WHERE u.email LIKE %:email%")
    List<Usuario> findByEmail(@Param("email") String email);
}
