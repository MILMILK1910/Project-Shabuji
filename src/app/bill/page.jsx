import NevbarBack from "../components/NevbarBack";
import Footer from "../components/Footer";


export default function Page() {
  return (
    <>
      <div as="nav" className="bg-white">
        <NevbarBack />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 rounded-lg p-6 shadow-lg">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-green-500">
                ชำระเงินสำเร็จ
              </h2>
              <h2 className="mt-10 text- text-2xl font-bold leading-9 tracking-tight text-gray-600">
                ข้อมูล</h2>
              <h2 className="text-black">หมายเลขคิว:</h2>
              <h2 className="text-black">ชื่อผู้จอง:</h2>
              <h2 className="text-black">เบอร์โทรศัพท์:</h2>
              <h2 className="text-black">วันที่จอง:</h2>
              <h2 className="text-black">เวลาที่จอง:</h2>

              <h2 className="mt-10 text- text-2xl font-bold leading-9 tracking-tight text-gray-600">
                สถานะ</h2>
              <h2 className="text-black">ราคา:</h2>
              <h2 className="text-black">ส่วนลด:</h2>
              <h2 className="text-black">ภาษี:</h2>
              <h2 className="text-black">ยอดชำระทั้งหมด:</h2>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-red-500">
            หมายเหตุ: *โปรดบันทึกหน้าจอ* หากท่านมากถึงร้าน โปรดแจ้งชื่อของท่านและโชว์สลิปให้แก่พนักงานของเราเพื่อสะดวกต่อการหาโต๊ะของท่าน</h2>
        </div>

        <Footer />
      </div>
    </>
  );
}