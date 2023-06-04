package com.techmex.techmex.Data.Providers.Mapper;

public interface IMapper <T, R> {

    // R es El DTO que se crea a partir de la entidad T
    R mapToDto (T t);

    // T es la Entidad que se crea a partir de el DTO R
    T mapToEntity (R r);
}
