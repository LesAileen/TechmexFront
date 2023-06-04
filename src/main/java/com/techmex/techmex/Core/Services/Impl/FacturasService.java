package com.techmex.techmex.Core.Services.Impl;


import com.techmex.techmex.Core.Services.IFacturasService;
import com.techmex.techmex.Data.Providers.IFacturasProvider;
import com.techmex.techmex.Dtos.FacturasDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class FacturasService implements IFacturasService {
    private final IFacturasProvider facturasProvider;


    @Override
    public List<FacturasDto> getListaFacturas() {
        return facturasProvider.getFacturas();
    }

    @Override
    public FacturasDto getFacturasId(Integer id) {
        return facturasProvider.getFacturasId(id);
    }

    @Override
    public FacturasDto insertFacturas(Date fecha, Double total, Boolean efectivo, Double cambio, Integer forma_pago_id, Integer orden_id) {
        return facturasProvider.insertFacturas(fecha, total, efectivo, cambio, forma_pago_id, orden_id);
    }

    @Override
    public FacturasDto updateFacturas(Integer id, Date fecha, Double total, Boolean efectivo, Double cambio, Integer forma_pago_id, Integer orden_id) {
        return facturasProvider.updateFacturas(id, fecha, total, efectivo, cambio, forma_pago_id, orden_id);
    }



    @Override
    public void deleteFacturasId(Integer id) {
        facturasProvider.deleteFacturasId(id);
    }



}
