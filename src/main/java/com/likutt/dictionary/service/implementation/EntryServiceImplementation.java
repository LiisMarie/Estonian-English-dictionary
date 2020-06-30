package com.likutt.dictionary.service.implementation;

import com.likutt.dictionary.domain.Entry;
import com.likutt.dictionary.repository.EntryRepository;
import com.likutt.dictionary.service.IService;
import net.minidev.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;


@Service
class EntryServiceImplementation implements IService<Entry> {

    @Autowired
    private EntryRepository entryRepository;

    @Override
    public Collection<Entry> findAll() {
        return entryRepository.findAll();
    }

    @Override
    public Entry findById(Long id) {
        return entryRepository.findById(id).get();
    }

    @Override
    public Entry saveOrUpdate(Entry entry) {
        return entryRepository.save(entry);
    }

    @Override
    public String deleteById(Long id) {
        JSONObject jsonObject = new JSONObject();
        entryRepository.deleteById(id);
        jsonObject.put("message", "Entry deleted successfully");
        return jsonObject.toString();
    }

}
