package com.techmex.techmex.Data.Providers.Impl;

import com.techmex.techmex.Data.Dao.IFormasPagoDao;
import com.techmex.techmex.Data.Entities.FormasPagoModel;
import com.techmex.techmex.Data.Providers.IFormasPagoProvider;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.FormasPagoDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FormasPagoProvider implements IFormasPagoProvider {
    private final IFormasPagoDao iFormasPagoDao;

    private final IMapper<FormasPagoModel, FormasPagoDto> mapperFormasPago;

    @Override
    public List<FormasPagoDto> getFormasPago() {
        return iFormasPagoDao.findAll().stream()
                .map(mapperFormasPago::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public FormasPagoDto getFormasPagoId(Integer id) {
        return iFormasPagoDao.findById(id)
                .map(mapperFormasPago::mapToDto)
                .orElse(null);
    }

    @Override
    public FormasPagoDto insertFormasPagoId(String forma_pago) {
        FormasPagoModel formasPago = FormasPagoModel.builder()
                .forma_pago(forma_pago)
                .build();
        iFormasPagoDao.save(formasPago);
        return mapperFormasPago.mapToDto(formasPago);
    }

    @Override
    public FormasPagoDto updateFormasPago(Integer id, String forma_pago) {
        FormasPagoModel formasPago = iFormasPagoDao.findById(id).orElse(null);
        formasPago = formasPago.builder()
                .forma_pago_id(id)
                .forma_pago(forma_pago)
                .build();
        iFormasPagoDao.save(formasPago);

        return mapperFormasPago.mapToDto(formasPago);
    }

    @Override
    public void deleteFormasPagoId(Integer id) {
        if(!iFormasPagoDao.existsById(id)){

            throw new RuntimeException("FORMAS DE PAGO NO EXISTE");
        }
        iFormasPagoDao.deleteById(id);
    }
}
