package com.invoiceout.server.dao;

import com.invoiceout.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface InvoiceDao extends JpaRepository<Invoice, Long> {
}
