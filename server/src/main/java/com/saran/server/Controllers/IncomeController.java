package com.saran.server.Controllers;

import com.saran.server.Models.IncomeModel;
import com.saran.server.Services.IncomeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("income")
@CrossOrigin("http://localhost:3000")
public class IncomeController {
    private final IncomeService incomeService;

    public IncomeController(IncomeService incomeService) {
        this.incomeService = incomeService;
    }

    @PostMapping("add")
    public ResponseEntity<String> addIncome(@RequestBody IncomeModel incomeModel) {
        return incomeService.AddIncome(incomeModel);
    }

    @GetMapping("all")
    public ResponseEntity<List<IncomeModel>> getAllIncome() {
        return incomeService.getAllIncome();
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteIncome(@PathVariable Long id) {
        return incomeService.DeleteIncome(id);
    }
}
