package com.grandvista.hotel.controller;

import java.util.List;
import java.math.BigDecimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import com.grandvista.hotel.entity.Payment;
import com.grandvista.hotel.service.PaymentService;
import com.grandvista.hotel.service.InvoiceService;
import com.grandvista.hotel.dto.PaymentDTO;
import com.grandvista.hotel.dto.BillDTO;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;
    
    @Autowired
    private InvoiceService invoiceService;
    
    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @PostMapping
    public Payment makePayment(
            @RequestBody PaymentDTO dto){

        return paymentService
                .makePayment(dto);
    }

    @GetMapping("/revenue")
    public BigDecimal getRevenue() {

        return paymentService.getRevenue();

    }
    
    @GetMapping("/customer/{customerId}")
    public List<Payment>
    getPaymentHistory(
    @PathVariable Integer customerId){

        return paymentService
                .getPaymentHistory(
                        customerId);
    }
    
    @GetMapping("/bill/{bookingId}")
    public String generateBill(
    @PathVariable Integer bookingId){

        return paymentService
                .generateBill(
                        bookingId);
    }
    
    @GetMapping("/final-bill/{bookingId}")
    public BillDTO generateFinalBill(
            @PathVariable Integer bookingId){

        return paymentService
                .generateFinalBill(bookingId);
    }
    
    @GetMapping("/invoice/{bookingId}")
    public ResponseEntity<byte[]>
    downloadInvoice(
    @PathVariable Integer bookingId)
    throws Exception {

        BillDTO bill =
                paymentService
                .generateFinalBill(
                        bookingId);

        byte[] pdf =
                invoiceService
                .generateInvoice(
                        bill);

        return ResponseEntity.ok()
                .header(
                HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=invoice.pdf")
                .contentType(
                MediaType.APPLICATION_PDF)
                .body(pdf);
    }
}

