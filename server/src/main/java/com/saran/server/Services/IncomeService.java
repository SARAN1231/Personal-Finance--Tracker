package com.saran.server.Services;

import com.saran.server.Models.IncomeModel;
import com.saran.server.Repository.IncomeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class IncomeService {

    private final IncomeRepository incomeRepository;
    public IncomeService(IncomeRepository incomeRepository) {
        this.incomeRepository = incomeRepository;
    }

    public  ResponseEntity<List<IncomeModel>> getAllIncome() {
        try{
            return new ResponseEntity<>(incomeRepository.findAll(), HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.NOT_FOUND);
    }


    public ResponseEntity<String> AddIncome(IncomeModel incomeModel) {
        try {
            incomeRepository.save(incomeModel);
            return new ResponseEntity<>("Income Added Successfully", HttpStatus.CREATED);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    public ResponseEntity<String> DeleteIncome( Long id) {
        if (incomeRepository.existsById(id)) {
            try {
                incomeRepository.deleteById(id);
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
