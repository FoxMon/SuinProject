package suinshop.suinbook.excel;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.ss.usermodel.*;
import org.springframework.stereotype.Service;
import suinshop.suinbook.domain.Item.Item;
import suinshop.suinbook.domain.Item.Medicine;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class ExcelManager {

    public static List<Medicine> getItemList() throws EncryptedDocumentException, IOException {

        List<Medicine> itemList = new ArrayList<Medicine>();

        String filePath = "C:/Users/김준호/Desktop/item/품의약.xls";
        InputStream inputStream = new FileInputStream(filePath);

        Workbook workbook = WorkbookFactory.create(inputStream); // load excel

        Sheet sheet = workbook.getSheetAt(0);
        Iterator<Row> rowiter = sheet.iterator();

        while(rowiter.hasNext()) {

            Medicine item = new Medicine();
            Row row = rowiter.next();

            if(row.getRowNum() == 0 || row.getRowNum() == 1) {

                continue;
            }

            if(row.getRowNum() > 101) {

                break;
            }

            Iterator<Cell> celliter = row.cellIterator();

            while (celliter.hasNext()) {

                Cell cell = celliter.next();
                int index = cell.getColumnIndex();

                switch (index) {
                    case 0: // number
                        // number
                        item.setId(Long.parseLong(String.valueOf((String)getValueFromCell(cell))));
                        break;

                    case 2: // name
                        item.setName((String)getValueFromCell(cell));
                        break;

                    case 4: // standard
                        item.setStandard((String)getValueFromCell(cell));
                        break;

                    case 5:
                        item.setOrigin((String)getValueFromCell(cell));
                        break;

                    case 21:
                        item.setPrice(((Double)getValueFromCell(cell)).intValue());
                }
            }

            itemList.add(item);
        }

        return itemList;
        }

    private static Object getValueFromCell(Cell cell) {
        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue();

            case BOOLEAN:
                return cell.getBooleanCellValue();

            case NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    return cell.getDateCellValue();
                }
                return cell.getNumericCellValue();

            case FORMULA:
                return cell.getCellFormula();

            case BLANK:
                return "";

            default:
                return "";
        }
    }
}
