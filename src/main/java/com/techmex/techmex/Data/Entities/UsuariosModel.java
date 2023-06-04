
package com.techmex.techmex.Data.Entities;



import javax.persistence.*;

import com.techmex.techmex.Data.Entities.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table (name = "Usuarios")
public class UsuariosModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_usuario;

    private String nombre;
    private String email;
    private String contrasenia;

    @Enumerated(EnumType.STRING)
    private UserRole role;

}
