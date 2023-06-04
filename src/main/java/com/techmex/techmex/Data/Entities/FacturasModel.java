package com.techmex.techmex.Data.Entities;



import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table(name = "Facturas")

public class FacturasModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer factura_id;
    @Column(nullable = false)
    private Date fecha;
    @Column(nullable = false)
    private Double total;
    @Column(nullable = false)
    private Boolean efectivo;
    @Column(nullable = false)
    private Double cambio;

    @ManyToOne
    @JoinColumn(name="formaPago_id",
            foreignKey = @ForeignKey(name = "FK_facturas_formasPago"))
    private FormasPagoModel formasPago;

    @OneToOne
    @JoinColumn(name="orden_id",
    foreignKey = @ForeignKey(name = "FK_facturas_orden"))
    private OrdenesModel orden;

}
