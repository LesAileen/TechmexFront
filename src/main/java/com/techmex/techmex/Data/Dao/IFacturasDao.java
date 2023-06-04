package com.techmex.techmex.Data.Dao;

import com.techmex.techmex.Data.Entities.FacturasModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IFacturasDao extends JpaRepository<FacturasModel, Integer> {
    Optional<FacturasModel> findById(Integer id);
}
