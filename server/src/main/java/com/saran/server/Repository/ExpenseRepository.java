package com.saran.server.Repository;

import com.saran.server.Models.ExpenseModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<ExpenseModel,Long> {
}
