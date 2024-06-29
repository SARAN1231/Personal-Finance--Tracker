package com.saran.server.Repository;

import com.saran.server.Models.IncomeModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncomeRepository extends JpaRepository<IncomeModel,Long> {
}
