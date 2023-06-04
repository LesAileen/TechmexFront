package com.techmex.techmex.Data.Providers.Mapper.Imp;

import com.techmex.techmex.Data.Entities.MesasModel;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.MesasDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MesasMapper implements IMapper<MesasModel, MesasDto> {


    @Override
    public MesasDto mapToDto(MesasModel mesasModel) {
        return MesasDto.builder()
                .id_mesas(mesasModel.getId_mesas())
                .capacidad(mesasModel.getCapacidad())
                .qr(Integer.valueOf(mesasModel.getQR()))//Estar atento a este Integer.valueOF
                .llevar(mesasModel.isLlevar()).build();
    }

    @Override
    public MesasModel mapToEntity(MesasDto mesasDto) {
        return null;
    }
}
