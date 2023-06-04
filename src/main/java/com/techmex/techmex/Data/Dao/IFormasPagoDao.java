package com.techmex.techmex.Data.Dao;

import com.techmex.techmex.Data.Entities.FormasPagoModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IFormasPagoDao extends JpaRepository<FormasPagoModel, Integer> {
    Optional<FormasPagoModel> findById(Integer id);
}
