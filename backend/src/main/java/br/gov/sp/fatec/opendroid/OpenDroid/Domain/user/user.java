package br.gov.sp.fatec.opendroid.OpenDroid.Domain.user;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "user")
@Entity(name = "user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String name;
    private String email;
    private String password; // Renomeado para "password"

    public user(RequestUser requestUser) {
        this.name = requestUser.name();
        this.email = requestUser.email();
        this.password = requestUser.pass(); // Renomeado para "password"
    }
}
