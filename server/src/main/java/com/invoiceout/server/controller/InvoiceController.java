package com.invoiceout.server.controller;


import com.invoiceout.server.model.Invoice;
import com.invoiceout.server.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice){
        return this.invoiceService.addInvoice(invoice);
    }

    @GetMapping("/invoice")
    public List<Invoice> getInvoice() {
         return this.invoiceService.getInvoice();
    }

    @DeleteMapping("/invoice/{id}")
    public Invoice deleteInvoice(@PathVariable String id){
        return this.invoiceService.deleteInvoice(Long.parseLong(id));
    }
}
