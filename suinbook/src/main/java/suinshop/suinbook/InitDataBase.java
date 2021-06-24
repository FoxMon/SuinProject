package suinshop.suinbook;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import suinshop.suinbook.domain.Board;
import suinshop.suinbook.domain.Item.Medicine;
import suinshop.suinbook.excel.ExcelManager;
import suinshop.suinbook.service.BoardService;
import suinshop.suinbook.service.ItemService;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class InitDataBase {

    private final InitService initService;
    private final BoardService boardService;

    @PostConstruct
    public void init() throws IOException {

        initService.dbInit();
        boardService.createBoard(new Board());
    }

    @Service
    @Transactional
    static class InitService {

        @Autowired
        private ExcelManager excelManager;

        @Autowired
        private ItemService itemService;

        public void dbInit() throws IOException {

            excelManager = new ExcelManager();
            List<Medicine> medicines = excelManager.getItemList();

            for(int i = 0; i < medicines.size(); i++) {
                itemService.saveItem(medicines.get(i));
            }
        }
    }
}
