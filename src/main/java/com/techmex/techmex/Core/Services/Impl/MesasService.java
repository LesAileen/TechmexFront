package com.techmex.techmex.Core.Services.Impl;

import com.techmex.techmex.Core.Services.IMesasService;
import com.techmex.techmex.Data.Providers.IMesasProvider;
import com.techmex.techmex.Dtos.MesasDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MesasService implements IMesasService {
    private final IMesasProvider mesasProvider;

    @Override
    public List<MesasDto> getListaMesas() {
        return null;
    }

    @Override
    public MesasDto getMesasId(Integer id) {
        return mesasProvider.getMesasId(id);
    }

    @Override
    public MesasDto insertMesas(Integer capacidad, Integer qr, boolean llevar) {
        return mesasProvider.insertMesas(capacidad, qr, llevar);
    }

    @Override
    public MesasDto updateMesas(Integer id, Integer capacidad, Integer qr, boolean llevar) {
        return mesasProvider.updateMesas(id, capacidad, qr, llevar);
    }

    @Override
    public void deleteMesasId(Integer id) {
        mesasProvider.deleteMesasId(id);
    }
}
