package com.likutt.dictionary.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public
class Entry {

    @Id
    @GeneratedValue
    private Long id;
    private String wordEst;
    private String wordEng;

    public Entry() {
    }

    public Entry(String wordEst, String wordEng) {
        this.wordEst = wordEst;
        this.wordEng = wordEng;
    }

    public Long getId() {
        return id;
    }

    public String getWordEst() {
        return wordEst;
    }

    public void setWordEst(String wordEst) {
        this.wordEst = wordEst;
    }

    public String getWordEng() {
        return wordEng;
    }

    public void setWordEng(String wordEng) {
        this.wordEng = wordEng;
    }

    @Override
    public String toString() {
        return "Entry{" +
                "id=" + id +
                ", wordEst='" + wordEst + '\'' +
                ", wordEng='" + wordEng + '\'' +
                '}';
    }
}
