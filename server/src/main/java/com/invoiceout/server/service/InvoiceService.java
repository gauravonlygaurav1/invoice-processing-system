package com.invoiceout.server.service;

import com.invoiceout.server.model.Invoice;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface InvoiceService {

    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoice();

    public Invoice deleteInvoice(Long id);
}
