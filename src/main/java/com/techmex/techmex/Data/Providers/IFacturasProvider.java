package com.techmex.techmex.Data.Providers;

import com.techmex.techmex.Dtos.FacturasDto;

import java.util.Date;
import java.util.List;

public interface IFacturasProvider {
    List<FacturasDto> getFacturas();
    FacturasDto getFacturasId(Integer id);
    FacturasDto insertFacturas(Date fecha, Double total, Boolean efectivo, Double cambio, Integer forma_pago_id, Integer orden_id);
    FacturasDto updateFacturas(Integer id,Date fecha, Double total, Boolean efectivo, Double cambio, Integer forma_pago_id, Integer orden_id);
    void deleteFacturasId(Integer id);
}
