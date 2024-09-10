package br.gov.sp.fatec.opendroid.OpenDroid.Domain.user;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import lombok.*;

@Table(name="user")
@Entity(name="user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class user {
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String name;

    private String email;

    private String pass;

    public user(RequestUser RequestUser) {
        this.name = RequestUser.name();
        this.email = RequestUser.email();
        this.pass = RequestUser.pass();
    }
}
