package com.techmex.techmex.Data.Providers.Impl;

import com.techmex.techmex.Data.Dao.ICategoriasDao;
import com.techmex.techmex.Data.Entities.CategoriasModel;
import com.techmex.techmex.Data.Providers.ICategoriasProvider;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.CategoriasDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class CategoriasProvider implements ICategoriasProvider {
    private final ICategoriasDao iCategoriasDao;
    private final IMapper<CategoriasModel, CategoriasDto> mapperCategorias;

    @Override
    public List<CategoriasDto> getCategorias() {
        return iCategoriasDao.findAll().stream()
                .map(mapperCategorias::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public CategoriasDto getCategoriasId(Integer id) {
        return iCategoriasDao.findById(id)
                .map(mapperCategorias::mapToDto)
                .orElse(null);
    }

    @Override
    public CategoriasDto insertCategorias(String categoria) {
        CategoriasModel newCategoria = CategoriasModel.builder()
                .categoria(categoria)
                .build();

        iCategoriasDao.save(newCategoria);

        return mapperCategorias.mapToDto(newCategoria);
    }

    @Override
    public CategoriasDto updateCategorias(Integer id, String categoria) {
        CategoriasModel categoria1 = iCategoriasDao.findById(id).orElse(null);

        categoria1 = categoria1.builder()
                .categoria_id(id)
                .categoria(categoria)
                .build();

        iCategoriasDao.save(categoria1);

        return mapperCategorias.mapToDto(categoria1);
    }

    @Override
    public void deleteCategoriasId(Integer id) {
        if(!iCategoriasDao.existsById(id)) {

            throw new RuntimeException("CATEGORIA NO EXISTE");
        }
        iCategoriasDao.deleteById(id);
    }
}
