package br.gov.sp.fatec.opendroid.model;

import jakarta.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Objects;

@Document(collection = "docs")
public class Doc {

    @Id
    private String id;

    private String title;

    private String description;

    private String tag;

    private LocalDate date;

    private String link;

    public Doc() {
    }

    public Doc(String id, String title, String description, String tag, LocalDate date, String link) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tag = tag;
        this.date = date;
        this.link = link;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Doc comment = (Doc) o;
        return Objects.equals(id, comment.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Docs{" + "id='" + id + '\'' + ", title='" + title + '\'' + ", description='" + description + '\'' + ", tag='" + tag + '\'' + ", date=" + date + ", link='" + link + '\'' + '}';
    }
}
