package suinshop.suinbook.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import suinshop.suinbook.domain.Member;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

//    @PersistenceContext
    private final EntityManager em;

    public void save(Member member) { // save

        em.persist(member);
    }

    public Member findOne(Long id) { // find member by id

        return em.find(Member.class, id);
    }

    public Member findOneByName(String name) { // find member by name

        try {

            return em.createQuery("select m from Member m where m.name = :name", Member.class)
                    .setParameter("name", name)
                    .getSingleResult();
        } catch(Exception e) {

            e.printStackTrace();
            return null;
        }
    }

    public List<Member> findAll() { // JPQL -> from target is Entity

        return  em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

    public List<Member> findByName(String name) { // find member by name

        // parameter binding. find for particular member
        return em.createQuery("select m from Member m where m.name = :name", Member.class)
                .setParameter("name", name)
                .getResultList();
    }
}
