package suinshop.suinbook.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import suinshop.suinbook.domain.Item.Medicine;
import suinshop.suinbook.domain.Member;
import suinshop.suinbook.excel.ExcelManager;
import suinshop.suinbook.repository.MemberRepository;
import suinshop.suinbook.service.MemberService;

import java.io.IOException;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ExcelTest {

    @Autowired
    ExcelManager excelManager;

    @Autowired
    ItemService itemService;

    @Test
    @Rollback(false) // -> query insert check
    public void 엑셀테스트() throws Exception { // commit -> insert == rollback x

        excelManager = new ExcelManager();
        List<Medicine> medicines = excelManager.getItemList();

        for(int i = 0; i < medicines.size(); i++) {

            itemService.saveItem(medicines.get(i));
        }
    }

}
