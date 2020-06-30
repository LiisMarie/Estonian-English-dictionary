package com.likutt.dictionary.resource.implementation;

import com.likutt.dictionary.domain.Entry;
import com.likutt.dictionary.resource.Resource;
import com.likutt.dictionary.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/entries")
@CrossOrigin(origins="*")
public class EntryResourceImplementation implements Resource<Entry> {

    @Autowired
    private IService<Entry> entryService;

    @Override
    public ResponseEntity<Collection<Entry>> findAll() {
        return new ResponseEntity<>(entryService.findAll(), HttpStatus.OK);
    }
    @Override
    public ResponseEntity<Entry> findById(Long id) {
        return new ResponseEntity<>(entryService.findById(id), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Entry> save(Entry entry) {
        return new ResponseEntity<>(entryService.saveOrUpdate(entry), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Entry> update(Entry entry) {
        return new ResponseEntity<>(entryService.saveOrUpdate(entry), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteById(Long id) {
        return new ResponseEntity<>(entryService.deleteById(id), HttpStatus.OK);
    }
}
