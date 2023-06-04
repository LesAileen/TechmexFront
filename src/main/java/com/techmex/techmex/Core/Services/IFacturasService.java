package com.techmex.techmex.Core.Services;

import com.techmex.techmex.Dtos.FacturasDto;

import java.util.Date;
import java.util.List;

public interface IFacturasService {
    List<FacturasDto> getListaFacturas();
    FacturasDto getFacturasId(Integer id);
    FacturasDto insertFacturas(Date fecha, Double total, Boolean efectivo, Double cambio, Integer forma_pago_id, Integer orden_id);
    FacturasDto updateFacturas(Integer id,Date fecha, Double total, Boolean efectivo, Double cambio, Integer forma_pago_id, Integer orden_id);


    void deleteFacturasId(Integer id);
}
