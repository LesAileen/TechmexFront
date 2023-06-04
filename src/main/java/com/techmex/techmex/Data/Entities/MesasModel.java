
package com.techmex.techmex.Data.Entities;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table (name = "Mesas")
public class MesasModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_mesas;

    private Integer capacidad;

    private Integer QR;

    private boolean llevar;

}
