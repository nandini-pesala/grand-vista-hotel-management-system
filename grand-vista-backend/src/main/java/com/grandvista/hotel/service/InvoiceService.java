package com.grandvista.hotel.service;

import java.io.ByteArrayOutputStream;

import org.springframework.stereotype.Service;

import com.grandvista.hotel.dto.BillDTO;
import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

@Service
public class InvoiceService {

    public byte[] generateInvoice(
            BillDTO bill)
            throws Exception {

        ByteArrayOutputStream out =
                new ByteArrayOutputStream();

        Document document =
                new Document();

        PdfWriter.getInstance(
                document,
                out);

        document.open();

        document.add(
            new Paragraph(
            "GRAND VISTA HOTEL"));

        document.add(
            new Paragraph(
            "Customer : "
            + bill.getCustomerName()));

        document.add(
            new Paragraph(
            "Room : "
            + bill.getRoomNumber()));

        document.add(
            new Paragraph(
            "Total : ₹"
            + bill.getTotalAmount()));

        document.close();

        return out.toByteArray();
    }
}
