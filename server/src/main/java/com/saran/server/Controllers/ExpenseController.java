package com.saran.server.Controllers;

import com.saran.server.Models.ExpenseModel;
import com.saran.server.Services.ExpenseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("expense")
@CrossOrigin("http://localhost:3000")
public class ExpenseController {

    private  final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping("add")
    public ResponseEntity<String> addIncome(@RequestBody ExpenseModel expenseModel) {
        return expenseService.AddExpense(expenseModel);
    }

    @GetMapping("all")
    public ResponseEntity<List<ExpenseModel>> getAllIncome() {
        return expenseService.getAllExpenses();
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteIncome(@PathVariable Long id) {
        return expenseService.DeleteExpense(id);
    }
}
