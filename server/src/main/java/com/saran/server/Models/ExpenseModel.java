package com.saran.server.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExpenseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Integer amount;
    private String type = "Expenses"; // default type will be income
    private String category;
    private String description;
    @Temporal(TemporalType.DATE)
    private Date createdAt = new Date();
}
