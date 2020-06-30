package com.likutt.dictionary;

import com.likutt.dictionary.domain.Entry;
import com.likutt.dictionary.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.stream.Stream;

@SpringBootApplication
public class DictionaryApplication implements CommandLineRunner {

    @Autowired
    private IService<Entry> service;

    public static void main(String[] args) {
        SpringApplication.run(DictionaryApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Stream.of(Arrays.asList("Tere", "Hello"),
                Arrays.asList("Kass", "Cat"),
                Arrays.asList("Koer", "Dog"),
                Arrays.asList("Rott", "Rat"),
                Arrays.asList("Päike", "Sun"),
                Arrays.asList("Arvuti", "Computer"),
                Arrays.asList("Telefon", "Phone"),
                Arrays.asList("Piim", "Milk"),
                Arrays.asList("Klaviatuur", "Keyboard"),
                Arrays.asList("Tuli", "Fire"),
                Arrays.asList("Suvi", "Summer"),
                Arrays.asList("Kool", "School"),
                Arrays.asList("Veebileht", "Website"),
                Arrays.asList("Lill", "Flower"),
                Arrays.asList("Kodu", "Home"),
                Arrays.asList("Mees", "Man"),
                Arrays.asList("Koolimaja", "School house"),
                Arrays.asList("Toit", "Food"),
                Arrays.asList("Banaan", "Banana")
        ).forEach(entry -> service.saveOrUpdate(new Entry(entry.get(0), entry.get(1))));
    }
}
