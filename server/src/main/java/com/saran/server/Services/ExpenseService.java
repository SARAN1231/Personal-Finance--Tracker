package com.saran.server.Services;

import com.saran.server.Models.ExpenseModel;
import com.saran.server.Repository.ExpenseRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExpenseService {

    private ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public ResponseEntity<List<ExpenseModel>> getAllExpenses() {
        try{
            return new ResponseEntity<>(expenseRepository.findAll(), HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.NOT_FOUND);
    }


    public ResponseEntity<String> AddExpense(ExpenseModel expenseModel) {
        try {
            expenseRepository.save(expenseModel);
            return new ResponseEntity<>("Income Added Successfully", HttpStatus.CREATED);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    public ResponseEntity<String> DeleteExpense( Long id) {
        if (expenseRepository.existsById(id)) {
            try {
                expenseRepository.deleteById(id);
                return new ResponseEntity<>("Income Deleted Successfully", HttpStatus.OK);
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<>("An error occurred while deleting the income", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            return new ResponseEntity<>("ID not found", HttpStatus.NOT_FOUND);
        }
    }
}
