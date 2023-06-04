package com.techmex.techmex.Dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class FacturasDto {
    private Integer factura_id;

    private Date fecha;

    private Double total;

    private Boolean efectivo;

    private Double cambio;

    private Integer forma_pago_id;

    private Integer orden_id;
}
