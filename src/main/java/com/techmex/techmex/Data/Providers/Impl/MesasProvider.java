package com.techmex.techmex.Data.Providers.Impl;

import com.techmex.techmex.Data.Dao.IMesasDao;
import com.techmex.techmex.Data.Entities.MesasModel;
import com.techmex.techmex.Data.Providers.IMesasProvider;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.MesasDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MesasProvider implements IMesasProvider {
    private final IMesasDao iMesasDao;
    private final IMapper <MesasModel, MesasDto> mapperMesas;


    @Override
    public List<MesasDto> getMesas() {
        return iMesasDao.findAll().stream()
                .map(mapperMesas::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public MesasDto getMesasId(Integer id) {
        return iMesasDao.findById(id)
                .map(mapperMesas::mapToDto)
                .orElse(null);
    }

    @Override
    public MesasDto insertMesas(Integer capacidad, Integer qr, boolean llevar) {
        MesasModel newMesas = MesasModel.builder()
                .capacidad(capacidad)
                .QR(qr)
                .llevar(llevar)
                .build();

        iMesasDao.save(newMesas);
        return mapperMesas.mapToDto(newMesas);
    }

    @Override
    public MesasDto updateMesas(Integer id, Integer capacidad, Integer qr, boolean llevar) {
        MesasModel newMesas = iMesasDao.findById(id).orElse(null);
        newMesas = newMesas.builder()
                .id_mesas(id)
                .capacidad(capacidad)
                .QR(qr)
                .llevar(llevar)
                .build();
        iMesasDao.save(newMesas);

        return mapperMesas.mapToDto(newMesas);
    }

    @Override
    public void deleteMesasId(Integer id) {
        if(!iMesasDao.existsById(id)){
            throw new RuntimeException("LA MESA NO EXISTE");
        }

        iMesasDao.deleteById(id);

    }
}
