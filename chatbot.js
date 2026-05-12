
const chatData = {
            knowledgeBase: [
     //unit1
                {
    prompts: ["automobile", "o to", "xe hoi", "car"],
    data: {
        term: "Automobile",
        ipa: "/ˈɔː.tə.mə.biːl/",
        img: "vocabulary/unit1/automobile.jpg",
        en: "A road vehicle, typically with four wheels, powered by an internal combustion engine.",
        vi: "Phương tiện giao thông đường bộ, thường có bốn bánh, chạy bằng động cơ đốt trong."
    }
},
{
    prompts: ["engine", "dong co"],
    data: {
        term: "Engine",
        ipa: "/ˈen.dʒɪn/",
        img: "vocabulary/unit1/engine.jpg",
        en: "The heart of the vehicle that converts fuel into mechanical motion.",
        vi: "Động cơ: Bộ phận chuyển đổi nhiên liệu thành chuyển động cơ học."
    }
},
{
    prompts: ["frame", "khung xe"],
    data: {
        term: "Frame",
        ipa: "/freɪm/",
        img: "vocabulary/unit1/frame.jpg",
        en: "The main structural system of a vehicle that supports all other components.",
        vi: "Khung xe: Cấu trúc chính nâng đỡ toàn bộ các bộ phận của xe."
    }
},
{
    prompts: ["suv", "xe suv", "xe the thao da dung"],
    data: {
        term: "SUV",
        ipa: "/ˌes.juːˈviː/",
        img: "vocabulary/unit1/suv.jpg",
        en: "Sport Utility Vehicle; a car designed for off-road performance.",
        vi: "Xe thể thao đa dụng: Loại xe được thiết kế để chạy trên nhiều địa hình."
    }
},

{
    prompts: ["exhaust gas", "khi thai"],
    data: {
        term: "Exhaust gas",
        ipa: "/ɪɡˈzɔːst ɡæs/",
        img: "vocabulary/unit1/exhaust-gas.jpg",
        en: "Waste gases produced during the combustion process inside the engine.",
        vi: "Khí thải: Các khí phát sinh trong quá trình đốt cháy bên trong động cơ."
    }
},
{
    prompts: ["transmission", "hop so", "he thong truyen dong"],
    data: {
        term: "Transmission",
        ipa: "/trænzˈmɪʃ.ən/",
        img: "vocabulary/unit1/transmission.jpg",
        en: "System that transmits power from engine to wheels via gears.",
        vi: "Hộp số/Hệ thống truyền động: Truyền lực từ động cơ tới bánh xe."
    }
},
{
    prompts: ["differential", "bo vi sai"],
    data: {
        term: "Differential",
        ipa: "/ˌdɪf.əˈren.ʃəl/",
        img: "vocabulary/unit1/differential.jpg",
        en: "Gear mechanism allowing wheels to rotate at different speeds when turning.",
        vi: "Bộ vi sai: Giúp các bánh xe quay với tốc độ khác nhau khi vào cua."
    }
},
{
    prompts: ["suspension system", "he thong treo"],
    data: {
        term: "Suspension system",
        ipa: "/səˈspen.ʃən/",
        img: "vocabulary/unit1/suspension.jpg",
        en: "System of springs and shock absorbers connecting the vehicle to its wheels.",
        vi: "Hệ thống treo: Kết nối thân xe với bánh xe qua lò xo và giảm chấn."
    }
},
{
    prompts: ["shock absorber", "giam chan", "phuoc"],
    data: {
        term: "Shock absorber",
        ipa: "/ˈʃɒk əbˌzɔː.bər/",
        img: "vocabulary/unit1/shock-absorber.jpg",
        en: "Mechanical device to damp shock impulses and absorb energy.",
        vi: "Bộ giảm chấn: Thiết bị giúp triệt tiêu các dao động khi xe di chuyển."
    }
},
                //unit2
                {
    prompts: ["catalytic converter", "bo xuc tac khi thai", "cat"],
    data: {
        term: "Catalytic converter",
        ipa: "/ˌkæt.əl.ɪt.ɪk kənˈvɜː.tər/",
        img: "vocabulary/unit2/catalytic_converter.jpg",
        en: "A device in the exhaust system that reduces toxic pollutants.",
        vi: "Một thiết bị trong hệ thống xả giúp giảm các chất gây ô nhiễm độc hại."
    }
},
{
    prompts: ["exhaust manifold", "ong gop xa", "co xa"],
    data: {
        term: "Exhaust manifold",
        ipa: "/ɪɡˈzɔːst ˈmæn.ɪ.fəuld/",
        img: "vocabulary/unit2/exhaust_manifold.jpg",
        en: "A system of pipes that collects exhaust gases from the cylinders.",
        vi: "Hệ thống ống dẫn gom khí thải từ các xi-lanh động cơ."
    }
},
{
    prompts: ["piston", "pit tong"],
    data: {
        term: "Piston",
        ipa: "/ˈpɪs.tən/",
        img: "vocabulary/unit2/piston.jpg",
        en: "A sliding cylinder inside a combustion chamber.",
        vi: "Một khối hình trụ trượt bên trong buồng đốt."
    }
},
{
    prompts: ["camshaft", "truc cam"],
    data: {
        term: "Camshaft",
        ipa: "/ˈkæm.ʃɑːft/",
        img: "vocabulary/unit2/camshaft.jpg",
        en: "A shaft used to operate the valves in an engine.",
        vi: "Trục dùng để điều khiển việc đóng mở các xupap trong động cơ."
    }
},
{
    prompts: ["valve seat", "de xupap"],
    data: {
        term: "Valve seat",
        ipa: "/vælv siːt/",
        img: "vocabulary/unit2/valve_seat.jpg",
        en: "The surface against which a valve rests when closed.",
        vi: "Bề mặt tiếp xúc mà xupap tựa vào khi ở trạng thái đóng."
    }
},
{
    prompts: ["camshaft drive chain", "xich truyen truc cam"],
    data: {
        term: "Camshaft drive chain",
        ipa: "/ˈkæm.ʃɑːft draɪv tʃeɪn/",
        img: "vocabulary/unit2/camshaft_drive_chain.jpg",
        en: "A chain that transmits motion from the crankshaft to the camshaft.",
        vi: "Sợi xích truyền chuyển động từ trục khuỷu đến trục cam."
    }
},
{
    prompts: ["cylinder", "xi lanh"],
    data: {
        term: "Cylinder",
        ipa: "/ˈsɪl.ɪn.dər/",
        img: "vocabulary/unit2/cylinder.jpg",
        en: "The central working part of a reciprocating engine.",
        vi: "Bộ phận làm việc chính của một động cơ tịnh tiến."
    }
},
{
    prompts: ["compression ignition engines", "dong co diesel", "ci engine"],
    data: {
        term: "Compression ignition engines",
        ipa: "/kəmˈpreʃ.ən ɪɡˈnɪʃ.ən ˈen.dʒɪnz/",
        img: "vocabulary/unit2/compression_ignition_engines.jpg",
        en: "Engines where fuel is ignited by the heat of compressed air.",
        vi: "Động cơ mà nhiên liệu tự bốc cháy nhờ nhiệt độ của khí nén."
    }
},
{
    prompts: ["intake manifold", "ong gop nap", "co hut"],
    data: {
        term: "Intake manifold",
        ipa: "/ˈɪn.teɪk ˈmæn.ɪ.fəuld/",
        img: "vocabulary/unit2/intake_manifold.jpg",
        en: "A pipe system that delivers air or air-fuel mixture to the cylinders.",
        vi: "Hệ thống ống dẫn đưa không khí hoặc hỗn hợp khí nạp vào xi-lanh."
    }
},
{
    prompts: ["combustion chamber", "buong dot"],
    data: {
        term: "Combustion chamber",
        ipa: "/kəmˈbʌs.tʃən ˈtʃeɪm.bər/",
        img: "vocabulary/unit2/combustion_chamber.jpg",
        en: "The area in an engine where the fuel-air mixture is burned.",
        vi: "Khu vực bên trong động cơ nơi hỗn hợp nhiên liệu-không khí được đốt cháy."
    }
},
{
    prompts: ["direct injection engines", "phun truc tiep", "di engine"],
    data: {
        term: "Direct injection engines",
        ipa: "/daɪˈrekt ɪnˈdʒek.ʃən ˈen.dʒɪnz/",
        img: "vocabulary/unit2/direct_injection_engines.jpg",
        en: "Engines where fuel is injected directly into the combustion chamber.",
        vi: "Động cơ mà nhiên liệu được phun thẳng vào buồng đốt."
    }
},
{
    prompts: ["spark ignition engine", "dong co xang", "si engine"],
    data: {
        term: "Spark ignition engine",
        ipa: "/spɑːk ɪɡˈnɪʃ.ən ˈen.dʒɪn/",
        img: "vocabulary/unit2/spark_ignition_engine.jpg",
        en: "An engine where a spark plug ignites the air-fuel mixture.",
        vi: "Động cơ sử dụng bugi để đánh lửa đốt cháy hỗn hợp khí nạp."
    }
},
{
    prompts: ["ignition plug", "bugi", "spark plug"],
    data: {
        term: "Ignition plug",
        ipa: "/ɪɡˈnɪʃ.ən plʌɡ/",
        img: "vocabulary/unit2/ignition_plug.jpg",
        en: "A device for delivering electric spark into the combustion chamber.",
        vi: "Thiết bị tạo ra tia lửa điện vào trong buồng đốt."
    }
},
{
    prompts: ["air fuel mixture", "hoa khi", "hon hop khi nhien lieu"],
    data: {
        term: "Air-fuel mixture",
        ipa: "/eər-fjuːəl ˈmɪks.tʃər/",
        img: "vocabulary/unit2/air-fuel_mixture.jpg",
        en: "The combination of air and fuel before combustion.",
        vi: "Sự kết hợp giữa không khí và nhiên liệu trước khi đốt cháy."
    }
},
{
    prompts: ["indirect injection engines", "phun gian tiep", "idi engine"],
    data: {
        term: "Indirect injection engines",
        ipa: "/ˌɪn.daɪˈrekt ɪnˈdʒek.ʃən ˈen.dʒɪnz/",
        img: "vocabulary/unit2/indirect_injection_engines.jpg",
        en: "Engines where fuel is injected into a pre-chamber.",
        vi: "Động cơ mà nhiên liệu được phun vào một buồng phụ trước."
    }
},
{
    prompts: ["exhaust valve", "xupap xa"],
    data: {
        term: "Exhaust valve",
        ipa: "/ɪɡˈzɔːst vælv/",
        img: "vocabulary/unit2/exhaust_valve.jpg",
        en: "A valve that opens to allow exhaust gases to escape.",
        vi: "Van mở ra để cho phép khí thải thoát ra ngoài."
    }
},
{
    prompts: ["valve lifter", "con doi xupap"],
    data: {
        term: "Valve lifter",
        ipa: "/vælv ˈlɪf.tər/",
        img: "vocabulary/unit2/valve_lifter.jpg",
        en: "A component that transmits cam motion to the valves.",
        vi: "Bộ phận truyền chuyển động từ cam đến xupap."
    }
},
{
    prompts: ["lambda sensor", "cam bien oxy", "o2 sensor"],
    data: {
        term: "Lambda sensor",
        ipa: "/ˈlæm.də ˈsen.sɔːr/",
        img: "vocabulary/unit2/lambda_sensor.jpg",
        en: "A sensor that measures the oxygen content in exhaust gases.",
        vi: "Cảm biến đo lượng oxy còn dư trong khí thải."
    }
},
{
    prompts: ["valve spring", "lo xo xupap"],
    data: {
        term: "Valve spring",
        ipa: "/vælv sprɪŋ/",
        img: "vocabulary/unit2/valve_spring.jpg",
        en: "A spring that holds a valve in the closed position.",
        vi: "Lò xo giữ cho xupap luôn ở trạng thái đóng."
    }
},
{
    prompts: ["inlet valve", "xupap nap"],
    data: {
        term: "Inlet valve",
        ipa: "/ˈɪn.let vælv/",
        img: "vocabulary/unit2/inlet_valve.jpg",
        en: "A valve that opens to allow the intake charge into the cylinder.",
        vi: "Van mở ra để cho phép hỗn hợp nạp đi vào xi-lanh."
    }
},
{
    prompts: ["injector nozzle", "dau kim phun"],
    data: {
        term: "Injector nozzle",
        ipa: "/ɪnˈdʒek.tər ˈnɒz.əl/",
        img: "vocabulary/unit2/injector_nozzle.jpg",
        en: "The tip of the fuel injector that sprays fuel.",
        vi: "Đầu của kim phun thực hiện việc phun nhiên liệu."
    }
},
                //Unit3
                {
    prompts: ["vacuum", "chan khong"],
    data: {
        term: "Vacuum",
        ipa: "/ˈvæk.juːm/",
        img: "vocabulary/unit3/vacuum.jpg",
        en: "A space entirely devoid of matter or a region with low pressure.",
        vi: "Một không gian hoàn toàn không có vật chất hoặc vùng có áp suất thấp."
    }
},
{
    prompts: ["correct proportion", "ty le dung", "ty le chuan hoa khi"],
    data: {
        term: "Correct proportion",
        ipa: "/kəˈrekt prəˈpɔː.ʃən/",
        img: "vocabulary/unit3/correct_proportion.jpg",
        en: "The proper ratio of elements in a mixture (e.g., air and fuel).",
        vi: "Tỷ lệ hợp lý của các thành phần trong một hỗn hợp (ví dụ: khí và nhiên liệu)."
    }
},
{
    prompts: ["volatile", "de bay hoi"],
    data: {
        term: "Volatile",
        ipa: "/ˈvɒl.ə.taɪl/",
        img: "vocabulary/unit3/volatile.jpg",
        en: "A substance that evaporates easily at normal temperatures.",
        vi: "Một chất lỏng có đặc tính dễ dàng bay hơi ở nhiệt độ bình thường."
    }
},
{
    prompts: ["mechanical pump", "bom co"],
    data: {
        term: "Mechanical pump",
        ipa: "/məˈkæn.ɪ.kəl pʌmp/",
        img: "vocabulary/unit3/mechanical_pump.jpg",
        en: "A pump driven by the engine's mechanical movement.",
        vi: "Một loại bơm được vận hành bằng chuyển động cơ học của động cơ."
    }
},
{
    prompts: ["electric fuel pump", "bom xang dien", "bom nhien lieu dien"],
    data: {
        term: "Electric fuel pump",
        ipa: "/iˈlek.trɪk fjuːəl pʌmp/",
        img: "vocabulary/unit3/electric_fuel_pump.jpg",
        en: "A pump powered by electricity to deliver fuel to the engine.",
        vi: "Bơm sử dụng năng lượng điện để đưa nhiên liệu vào động cơ."
    }
},
{
    prompts: ["fuel transfer pump", "bom chuyen nhien lieu"],
    data: {
        term: "Fuel transfer pump",
        ipa: "/fjuːəl trænsˈfɜːr pʌmp/",
        img: "vocabulary/unit3/fuel_transfer_pump.jpg",
        en: "A pump used to move fuel from the tank to the injection system.",
        vi: "Bơm dùng để vận chuyển nhiên liệu từ bình chứa đến hệ thống phun."
    }
},
{
    prompts: ["throttle valve", "buom ga", "van tiet luu", "throttle"],
    data: {
        term: "Throttle valve",
        ipa: "/ˈθrɒt.əl vælv/",
        img: "vocabulary/unit3/throttle_valve.jpg",
        en: "A valve that controls the amount of air entering the engine.",
        vi: "Van điều khiển lượng không khí đi vào buồng đốt của động cơ."
    }
},
{
    prompts: ["high pressure", "ap suat cao", "hp"],
    data: {
        term: "High pressure",
        ipa: "/haɪ ˈpreʃ.ər/",
        img: "vocabulary/unit3/high_pressure.jpg",
        en: "A physical condition of having a large amount of force per area.",
        vi: "Một trạng thái vật lý có lực tác động lớn trên một đơn vị diện tích."
    }
},
{
    prompts: ["intake manifold", "ong gop nap", "co hut"],
    data: {
        term: "Intake manifold",
        ipa: "/ˈɪn.teɪk ˈmæn.ɪ.fəʊld/",
        img: "vocabulary/unit3/intake_manifold.jpg",
        en: "A system of pipes that distributes the intake air to the cylinders.",
        vi: "Hệ thống ống dẫn phân phối khí nạp đến các xi-lanh."
    }
},
{
    prompts: ["exhaust manifold", "ong gop xa", "co xa"],
    data: {
        term: "Exhaust manifold",
        ipa: "/ɪɡˈzɔːst ˈmæn.ɪ.fəʊld/",
        img: "vocabulary/unit3/exhaust_manifold.jpg",
        en: "Pipes that collect exhaust gases from the cylinders into the exhaust pipe.",
        vi: "Hệ thống ống gom khí thải từ các xi-lanh vào ống xả chung."
    }
},
{
    prompts: ["filter", "bo loc", "loc"],
    data: {
        term: "Filter",
        ipa: "/ˈfɪl.tər/",
        img: "vocabulary/unit3/filter.jpg",
        en: "A device used to remove impurities from liquids or gases.",
        vi: "Thiết bị được sử dụng để loại bỏ các tạp chất khỏi chất lỏng hoặc khí."
    }
},
{
    prompts: ["fuel injector", "kim phun", "injector"],
    data: {
        term: "Fuel injector",
        ipa: "/fjuːəl ɪnˈdʒek.tər/",
        img: "vocabulary/unit3/fuel_injector.gif",
        en: "An electronically controlled valve that atomizes fuel into the air stream.",
        vi: "Một van điều khiển điện tử giúp phun tơi nhiên liệu vào dòng khí nạp."
    }
},
{
    prompts: ["piezoelectric injector", "kim phun piezo", "piezo injector"],
    data: {
        term: "Piezoelectric injector",
        ipa: "/piˌeɪ.zəʊ.iˈlek.trɪk ɪnˈdʒek.tər/",
        img: "vocabulary/unit3/piezoelectric_injector.gif",
        en: "An advanced injector using piezoelectric crystals for faster response.",
        vi: "Kim phun hiện đại sử dụng tinh thể thạch anh để có phản ứng phun nhanh hơn."
    }
},
{
    prompts: ["fuel", "nhien lieu", "xang", "dau"],
    data: {
        term: "Fuel",
        ipa: "/ˈfjuː.əl/",
        img: "vocabulary/unit1/fuel.jpg",
        en: "Energy source (petrol, diesel, electricity) used to power the engine.",
        vi: "Nhiên liệu: Nguồn năng lượng dùng để vận hành động cơ."
    }
},

{
    prompts: ["common rail", "ong rail", "cr", "he thong common rail"],
    data: {
        term: "Common rail",
        ipa: "/ˌkɒm.ən ˈreɪl/",
        img: "vocabulary/unit3/common_rail.jpg",
        en: "A high-pressure fuel reservoir for all the fuel injectors.",
        vi: "Một ống chứa nhiên liệu áp suất cao dùng chung cho tất cả các kim phun."
    }
},
//unit5
{
    prompts: ["chemical reaction", "phan ung hoa hoc"],
    data: {
        term: "Chemical reaction",
        ipa: "/ˈkem.ɪ.kəl riˈæk.ʃən/",
        img: "vocabulary/unit5/chemical_reaction.jpg",
        en: "A process that involves rearrangement of molecular structure.",
        vi: "Quá trình thay đổi cấu trúc phân tử của các chất."
    }
},
{
    prompts: ["electrochemical reaction", "phan ung dien hoa"],
    data: {
        term: "Electrochemical reaction",
        ipa: "/iˌlek.trəʊˈkem.ɪ.kəl riˈæk.ʃən/",
        img: "vocabulary/unit5/electrochemical_reaction.jpg",
        en: "A reaction that occurs between an electrolyte and an electrode.",
        vi: "Phản ứng xảy ra giữa chất điện phân và điện cực."
    }
},
{
    prompts: ["electrode", "dien cuc"],
    data: {
        term: "Electrode",
        ipa: "/iˈlek.trəʊd/",
        img: "vocabulary/unit5/electrode.jpg",
        en: "A conductor through which electricity enters or leaves a system.",
        vi: "Một vật dẫn điện giúp dòng điện đi vào hoặc đi ra khỏi hệ thống."
    }
},
{
    prompts: ["negative plate", "ban cuc am"],
    data: {
        term: "Negative plate",
        ipa: "/ˈneɡ.ə.tɪv pleɪt/",
        img: "vocabulary/unit5/negative_plate.jpg",
        en: "The electrode in a battery with an excess of electrons.",
        vi: "Bản điện cực trong ắc quy có dư thừa electron."
    }
},
{
    prompts: ["positive plate", "ban cuc duong"],
    data: {
        term: "Positive plate",
        ipa: "/ˈpɒz.ə.tɪv pleɪt/",
        img: "vocabulary/unit5/positive_plate.jpg",
        en: "The electrode in a battery that receives electrons.",
        vi: "Bản điện cực trong ắc quy tiếp nhận các electron."
    }
},
{
    prompts: ["high voltage", "dien ap cao"],
    data: {
        term: "High-voltage",
        ipa: "/ˌhaɪˈvəʊl.tɪdʒ/",
        img: "vocabulary/unit5/high_voltage.jpg",
        en: "Electrical potential large enough to cause injury or damage.",
        vi: "Mức điện thế đủ lớn để có thể gây thương tích hoặc hư hỏng."
    }
},
{
    prompts: ["electrical spark", "tia lua dien"],
    data: {
        term: "Electrical spark",
        ipa: "/iˈlek.trɪ.kəl spɑːk/",
        img: "vocabulary/unit5/electrical_spark.jpg",
        en: "A luminous discharge of electricity across a gap.",
        vi: "Sự phóng điện phát sáng qua một khe hở giữa hai điện cực."
    }
},
{
    prompts: ["voltage regulator", "bo dieu ap"],
    data: {
        term: "Voltage regulator",
        ipa: "/ˈvəʊl.tɪdʒ ˈreɡ.jə.leɪ.tər/",
        img: "vocabulary/unit5/voltage_regulator.jpg",
        en: "A device that maintains a constant voltage level.",
        vi: "Thiết bị dùng để duy trì mức điện áp ổn định."
    }
},
{
    prompts: ["vaporization", "su bay hoi"],
    data: {
        term: "Vaporization",
        ipa: "/ˌveɪ.pər.aɪˈzeɪ.ʃən/",
        img: "vocabulary/unit5/vaporization.jpg",
        en: "The phase transition of a substance from liquid to vapor.",
        vi: "Sự chuyển pha của một chất từ thể lỏng sang thể hơi."
    }
},
{
    prompts: ["humidity", "do am"],
    data: {
        term: "Humidity",
        ipa: "/hjuːˈmɪd.ə.ti/",
        img: "vocabulary/unit5/humidity.jpg",
        en: "The amount of water vapor in the air.",
        vi: "Lượng hơi nước có trong không khí."
    }
},
{
    prompts: ["magnetic switch", "cong tac tu"],
    data: {
        term: "Magnetic switch",
        ipa: "/mæɡˈnet.ɪk swɪtʃ/",
        img: "vocabulary/unit5/magnetic_switch.jpg",
        en: "A switch that opens or closes using a magnetic field.",
        vi: "Loại công tắc đóng hoặc ngắt bằng cách sử dụng từ trường."
    }
},
{
    prompts: ["commutator", "co gop"],
    data: {
        term: "Commutator",
        ipa: "/ˈkɒm.jə.teɪ.tər/",
        img: "vocabulary/unit5/commutator.jpg",
        en: "A device for reversing the direction of electric current in a motor.",
        vi: "Thiết bị dùng để đảo chiều dòng điện trong động cơ điện."
    }
},
{
    prompts: ["armature", "phan ung"],
    data: {
        term: "Armature",
        ipa: "/ˈɑː.mə.tʃər/",
        img: "vocabulary/unit5/armature.jpg",
        en: "The rotating part of an electric motor or generator.",
        vi: "Phần quay của động cơ điện hoặc máy phát điện."
    }
},
{
    prompts: ["field coil", "cuon kich tu"],
    data: {
        term: "Field coil",
        ipa: "/fiːld kɔɪl/",
        img: "vocabulary/unit5/field_coil.jpg",
        en: "An electromagnet used to generate a magnetic field in a machine.",
        vi: "Nam châm điện dùng để tạo ra từ trường trong máy điện."
    }
},
{
    prompts: ["generator", "may phat dien"],
    data: {
        term: "Generator",
        ipa: "/ˈdʒen.ər.eɪ.tər/",
        img: "vocabulary/unit5/generator.jpg",
        en: "A machine that converts mechanical energy into electricity.",
        vi: "Máy dùng để chuyển đổi năng lượng cơ năng thành điện năng."
    }
},

{
    prompts: ["battery", "ac quy"],
    data: {
        term: "Battery",
        ipa: "/ˈbætəri/",
        img: "vocabulary/unit5/battery.jpg",
        en: "The primary source of electrical power in all automobiles.",
        vi: "Nguồn cung cấp điện năng chính trên tất cả các loại ô tô."
    }
},
{
    prompts: ["ignition system", "he thong danh lua"],
    data: {
        term: "Ignition system",
        ipa: "/ɪɡˈnɪʃən ˈsɪstəm/",
        img: "vocabulary/unit5/ignition_system.jpg",
        en: "System designed to supply properly timed high-voltage sparks to the engine.",
        vi: "Hệ thống cung cấp tia lửa điện cao áp đúng thời điểm cho động cơ."
    }
},
{
    prompts: ["starting system", "he thong khoi dong"],
    data: {
        term: "Starting system",
        ipa: "/ˈstɑːrtɪŋ ˈsɪstəm/",
        img: "vocabulary/unit5/starting_system.jpg",
        en: "System designed to crank the engine until it can operate under its own power.",
        vi: "Hệ thống dùng để quay trục khuỷu cho đến khi động cơ tự chạy được."
    }
},
{
    prompts: ["charging system", "he thong nap"],
    data: {
        term: "Charging system",
        ipa: "/ˈtʃɑːrdʒɪŋ ˈsɪstəm/",
        img: "vocabulary/unit5/charging_system.jpg",
        en: "Responsible for producing energy to meet electrical loads and recharging the battery.",
        vi: "Hệ thống sản sinh năng lượng cho các phụ tải và nạp lại điện cho ắc-quy."
    }
},
{
    prompts: ["lighting system", "he thong chieu sang"],
    data: {
        term: "Lighting system",
        ipa: "/ˈlaɪtɪŋ ˈsɪstəm/",
        img: "vocabulary/unit5/lighting_system.jpg",
        en: "Provides power to both exterior and interior lights of the vehicle.",
        vi: "Hệ thống cung cấp điện cho toàn bộ đèn chiếu sáng trong và ngoài xe."
    }
},
{
    prompts: ["lead acid battery", "ac quy chi axit"],
    data: {
        term: "Lead-acid battery",
        ipa: "/led-ˈæsɪd ˈbætəri/",
        img: "vocabulary/unit5/lead_acid_battery.jpg",
        en: "The standard power source for conventional vehicles using lead plates and acid.",
        vi: "Nguồn điện tiêu chuẩn cho xe truyền thống sử dụng bản cực chì và axit."
    }
},
{
    prompts: ["electrochemical cell", "ngan ac quy"],
    data: {
        term: "Electrochemical cell",
        ipa: "/ɪˌlɛktroʊˈkɛmɪkəl sɛl/",
        img: "vocabulary/unit5/electrochemical_cell.jpg",
        en: "A unit consisting of electrodes and electrolyte to produce electricity.",
        vi: "Đơn vị gồm các điện cực và dung dịch điện phân để tạo ra điện."
    }
},
{
    prompts: ["electrolyte", "dung dich dien phan"],
    data: {
        term: "Electrolyte",
        ipa: "/ɪˈlɛktrəˌlaɪt/",
        img: "vocabulary/unit5/electrolyte.jpg",
        en: "The liquid (acid mixture) inside a battery that surrounds the electrodes.",
        vi: "Chất lỏng (hỗn hợp axit) bên trong ắc-quy bao quanh các điện cực."
    }
},
{
    prompts: ["electrode", "dien cuc"],
    data: {
        term: "Electrode",
        ipa: "/ɪˈlɛktroʊd/",
        img: "vocabulary/unit5/electrode.jpg",
        en: "Conductive plates (positive and negative) inside the battery cells.",
        vi: "Các tấm dẫn điện (dương và âm) bên trong các ngăn ắc-quy."
    }
},
{
    prompts: ["positive plate", "ban cuc duong"],
    data: {
        term: "Positive plate",
        ipa: "/ˈpɑːzətɪv pleɪt/",
        img: "vocabulary/unit5/positive_plate.jpg",
        en: "The battery plate characterized by a lack of electrons.",
        vi: "Tấm cực trong ắc-quy có tình trạng thiếu hụt điện tử."
    }
},
{
    prompts: ["negative plate", "ban cuc am"],
    data: {
        term: "Negative plate",
        ipa: "/ˈnɛɡətɪv pleɪt/",
        img: "vocabulary/unit5/negative_plate.jpg",
        en: "The battery plate characterized by an abundance of electrons.",
        vi: "Tấm cực trong ắc-quy có tình trạng dư thừa điện tử."
    }
},
{
    prompts: ["terminal", "coc binh"],
    data: {
        term: "Terminal",
        ipa: "/ˈtɜːrmɪnl/",
        img: "vocabulary/unit5/terminal.jpg",
        en: "External connection points (positive and negative) on the battery.",
        vi: "Các điểm kết nối bên ngoài (dương và âm) trên bình ắc-quy."
    }
},
{
    prompts: ["spark plug", "bugi"],
    data: {
        term: "Spark plug",
        ipa: "/spɑːrk plʌɡ/",
        img: "vocabulary/unit5/spark_plug.jpg",
        en: "Device that produces an electrical spark to ignite the air-fuel mixture.",
        vi: "Thiết bị tạo ra tia lửa điện để đốt cháy hỗn hợp hòa khí."
    }
},
{
    prompts: ["distributor ignition", "danh lua co bo chia"],
    data: {
        term: "Distributor ignition",
        ipa: "/dɪˈstrɪbjətər ɪɡˈnɪʃən/",
        img: "vocabulary/unit5/distributor_ignition.jpg",
        en: "Ignition system using a mechanical distributor to time spark delivery.",
        vi: "Hệ thống dùng bộ chia điện cơ khí để phân phối tia lửa đúng kỳ."
    }
},
{
    prompts: ["electronic ignition", "danh lua dien tu"],
    data: {
        term: "Electronic ignition",
        ipa: "/ɪˌlɛkˈtrɑːnɪk ɪɡˈnɪʃən/",
        img: "vocabulary/unit5/electronic_ignition.jpg",
        en: "Ignition system using semiconductors instead of mechanical breakers.",
        vi: "Hệ thống dùng linh kiện bán dẫn thay cho bộ ngắt điện cơ khí."
    }
},
{
    prompts: ["dis", "he thong danh lua dis"],
    data: {
        term: "DIS",
        ipa: "/di-aɪ-ɛs/",
        img: "vocabulary/unit5/dis.jpg",
        en: "Distributor-less Ignition System; switches high voltage electronically.",
        vi: "Hệ thống đánh lửa không sử dụng bộ chia điện cơ khí."
    }
},
{
    prompts: ["starter motor", "may khoi dong"],
    data: {
        term: "Starter motor",
        ipa: "/ˈstɑːrtər ˈmoʊtər/",
        img: "vocabulary/unit5/starter_motor.jpg",
        en: "Electric motor that produces high torque to spin the engine's flywheel.",
        vi: "Động cơ điện tạo mô-men lớn để quay bánh đà khởi động xe."
    }
},
{
    prompts: ["solenoid", "chuot de"],
    data: {
        term: "Solenoid",
        ipa: "/ˈsoʊlənɔɪd/",
        img: "vocabulary/unit5/solenoid.jpg",
        en: "An electromagnetic switch that controls the high current to the starter.",
        vi: "Công tắc điện từ điều khiển dòng điện lớn vào máy khởi động."
    }
},
{
    prompts: ["ignition switch", "cong tac danh lua"],
    data: {
        term: "Ignition switch",
        ipa: "/ɪɡˈnɪʃən swɪtʃ/",
        img: "vocabulary/unit5/ignition_switch.jpg",
        en: "Driver-operated switch, usually on the steering column, to start the vehicle.",
        vi: "Công tắc (thường ở cổ lái) để tài xế kích hoạt hệ thống khởi động."
    }
},
{
    prompts: ["battery cables", "cap ac quy"],
    data: {
        term: "Battery cables",
        ipa: "/ˈbætəri ˈkeɪblz/",
        img: "vocabulary/unit5/battery_cables.jpg",
        en: "Large diameter wires connecting the battery to the starter and ground.",
        vi: "Các dây dẫn lớn nối ắc-quy với máy khởi động và thân xe."
    }
},
{
    prompts: ["relay", "ro le"],
    data: {
        term: "Relay",
        ipa: "/ˈriːleɪ/",
        img: "vocabulary/unit5/relay.jpg",
        en: "An electrically operated magnetic switch used to control other circuits.",
        vi: "Công tắc điện từ dùng để đóng ngắt các mạch điện phụ tải."
    }
},
{
    prompts: ["magnetic field", "tu truong"],
    data: {
        term: "Magnetic field",
        ipa: "/mæɡˈnɛtɪzəm fiːld/",
        img: "vocabulary/unit5/magnetic_field.jpg",
        en: "The area of force around a conductor used in motors and generators.",
        vi: "Vùng lực quanh dây dẫn được dùng trong động cơ và máy phát."
    }
},
{
    prompts: ["armature", "phan ung"],
    data: {
        term: "Armature",
        ipa: "/ˈɑːrmətʃər/",
        img: "vocabulary/unit5/armature.jpg",
        en: "The rotating component of a motor or generator.",
        vi: "Bộ phận quay chính trong động cơ điện hoặc máy phát điện."
    }
},
{
    prompts: ["field coil", "cuon kich tu"],
    data: {
        term: "Field coil",
        ipa: "/fiːld kɔɪl/",
        img: "vocabulary/unit5/field_coil.jpg",
        en: "Windings used to create a magnetic field in electrical machines.",
        vi: "Các cuộn dây dùng để tạo ra từ trường trong máy điện."
    }
},
{
    prompts: ["commutator", "co gop"],
    data: {
        term: "Commutator",
        ipa: "/ˈkɑːmjuːˌteɪtər/",
        img: "vocabulary/unit5/commutator.jpg",
        en: "Segmented part of an armature that maintains electrical contact with brushes.",
        vi: "Bộ phận gồm các phiến đồng trên phần ứng tiếp xúc với chổi than."
    }
},
{
    prompts: ["brushes", "choi than"],
    data: {
        term: "Brushes",
        ipa: "/ˈbrʌʃɪz/",
        img: "vocabulary/unit5/brushes.jpg",
        en: "Carbon blocks that carry current to or from the commutator.",
        vi: "Khối carbon dẫn dòng điện vào hoặc ra khỏi cổ góp quay."
    }
},
{
    prompts: ["series motor", "dong co noi tiep"],
    data: {
        term: "Series motor",
        ipa: "/ˈsɪriːz ˈmoʊtər/",
        img: "vocabulary/unit5/series_motor.jpg",
        en: "Motor where armature is wired in series with the field coils.",
        vi: "Động cơ có cuộn phần ứng và cuộn kích từ mắc nối tiếp."
    }
},
{
    prompts: ["shunt motor", "dong co song song"],
    data: {
        term: "Shunt motor",
        ipa: "/ʃʌnt ˈmoʊtər/",
        img: "vocabulary/unit5/shunt_motor.jpg",
        en: "Motor where field coils are wired parallel to the armature.",
        vi: "Động cơ có cuộn dây kích từ mắc song song với phần ứng."
    }
},
{
    prompts: ["compound motor", "dong co hon hop"],
    data: {
        term: "Compound motor",
        ipa: "/ˈkɑːmˌpaʊnd ˈmoʊtər/",
        img: "vocabulary/unit5/compound_motor.jpg",
        en: "A motor using a combination of series and shunt wiring.",
        vi: "Loại động cơ kết hợp cả cách mắc nối tiếp và song song."
    }
},
{
    prompts: ["ac generator", "may phat dien xoay chieu"],
    data: {
        term: "AC generator",
        ipa: "/ˌeɪ ˈsiː ˈʤɛnəˌreɪtər/",
        img: "vocabulary/unit5/ac_generator.jpg",
        en: "Also called an alternator; produces alternating current.",
        vi: "Thiết bị tạo ra dòng điện xoay chiều."
    }
},
{
    prompts: ["dc generator", "may phat dien mot chieu"],
    data: {
        term: "DC generator",
        ipa: "/ˌdiː ˈsiː ˈʤɛnəˌreɪtər/",
        img: "vocabulary/unit5/dc_generator.jpg",
        en: "Older type of generator producing direct current using brushes and commutator.",
        vi: "Loại máy phát đời cũ tạo ra dòng điện một chiều trực tiếp."
    }
},
{
    prompts: ["induction", "hien tuong cam ung"],
    data: {
        term: "Induction",
        ipa: "/ɪnˈdʌkʃən/",
        img: "vocabulary/unit5/induction.jpg",
        en: "The process of creating voltage in a wire moving through a magnetic field.",
        vi: "Quá trình tạo ra điện áp khi dây dẫn cắt qua các đường sức từ."
    }
},
{
    prompts: ["alternating current", "dong dien xoay chieu"],
    data: {
        term: "Alternating Current",
        ipa: "/ˈɔːltərˌneɪtɪŋ ˈkɜːrənt/",
        img: "vocabulary/unit5/alternating_current.jpg",
        en: "Electrical current that reverses direction periodically.",
        vi: "Dòng điện có chiều biến thiên liên tục theo chu kỳ."
    }
},
{
    prompts: ["direct current", "dong dien mot chieu"],
    data: {
        term: "Direct Current",
        ipa: "/dɪˈrɛkt ˈkɜːrənt/",
        img: "vocabulary/unit5/direct_current.jpg",
        en: "Electrical current that flows in one constant direction.",
        vi: "Dòng điện chỉ chảy theo một chiều cố định."
    }
},
{
    prompts: ["rotor", "ro to"],
    data: {
        term: "Rotor",
        ipa: "/ˈroʊtər/",
        img: "vocabulary/unit5/rotor.jpg",
        en: "The spinning magnetic field inside an AC generator.",
        vi: "Bộ phận quay tạo ra từ trường trong máy phát điện xoay chiều."
    }
},
{
    prompts: ["stator", "sa to"],
    data: {
        term: "Stator",
        ipa: "/ˈsteɪtər/",
        img: "vocabulary/unit5/stator.jpg",
        en: "The assembly of stationary conductors in an AC generator.",
        vi: "Bộ phận đứng yên chứa các cuộn dây dẫn trong máy phát điện."
    }
},
{
    prompts: ["diode", "di ot"],
    data: {
        term: "Diode",
        ipa: "/ˈdaɪoʊd/",
        img: "vocabulary/unit5/diode.jpg",
        en: "Electronic device that allows current to flow in only one direction.",
        vi: "Linh kiện điện tử chỉ cho phép dòng điện đi qua theo một chiều."
    }
},
{
    prompts: ["rectifier", "bo chinh luu"],
    data: {
        term: "Rectifier",
        ipa: "/ˈrɛktɪˌfaɪər/",
        img: "vocabulary/unit5/rectifier.jpg",
        en: "Component using diodes that changes AC into DC.",
        vi: "Bộ phận dùng đi-ốt để biến đổi điện xoay chiều thành điện một chiều."
    }
},

{
    prompts: ["field current", "dong dien kich tu"],
    data: {
        term: "Field current",
        ipa: "/fiːld ˈkɜːrənt/",
        img: "vocabulary/unit5/field_current.jpg",
        en: "Current flowing through the rotor to vary magnetic field strength.",
        vi: "Dòng điện chạy qua rô-to để thay đổi cường độ từ trường."
    }
},
{
    prompts: ["sensing voltage", "dien ap phan hoi"],
    data: {
        term: "Sensing voltage",
        ipa: "/ˈsɛnsɪŋ ˈvoʊltɪʤ/",
        img: "vocabulary/unit5/sensing_voltage.jpg",
        en: "Signal used by the regulator to monitor system voltage.",
        vi: "Tín hiệu điện áp để bộ tiết chế theo dõi tình trạng hệ thống."
    }
},
{
    prompts: ["headlights", "den pha"],
    data: {
        term: "Headlights",
        ipa: "/ˈhɛdˌlaɪts/",
        img: "vocabulary/unit5/headlights.jpg",
        en: "Front lamps for lighting the road ahead during darkness.",
        vi: "Đèn chiếu sáng phía trước xe khi đi trong đêm tối."
    }
},
{
    prompts: ["taillights", "den hau"],
    data: {
        term: "Taillights",
        ipa: "/ˈteɪˌlaɪts/",
        img: "vocabulary/unit5/taillights.jpg",
        en: "Red lamps at the rear to indicate vehicle presence and width.",
        vi: "Các đèn màu đỏ phía sau xe dùng để báo hiệu sự hiện diện."
    }
},
{
    prompts: ["turn signal lamp", "den xi nhan"],
    data: {
        term: "Turn signal lamp",
        ipa: "/tɜːrn ˈsɪɡnəl læmp/",
        img: "vocabulary/unit5/turn_signal_lamp.jpg",
        en: "Flashing lamp to indicate the direction the driver intends to turn.",
        vi: "Đèn nhấp nháy báo hiệu hướng xe chuẩn bị rẽ."
    }
},
{
    prompts: ["hazard warning", "den canh bao nguy hiem"],
    data: {
        term: "Hazard warning",
        ipa: "/ˈhæzərd ˈwɔːrnɪŋ/",
        img: "vocabulary/unit5/hazard_warning.jpg",
        en: "System that flashes all turn signals for emergency signaling.",
        vi: "Hệ thống nháy tất cả các đèn báo rẽ khi xe gặp sự cố."
    }
},
{
    prompts: ["stoplights", "den phanh"],
    data: {
        term: "Stoplights",
        ipa: "/ˈstɑːpˌlaɪts/",
        img: "vocabulary/unit5/stoplights.jpg",
        en: "Rear lamps that illuminate when the driver applies the brakes.",
        vi: "Đèn đỏ phía sau sáng lên khi tài xế đạp bàn đạp phanh."
    }
},
{
    prompts: ["back up lights", "den lui"],
    data: {
        term: "Back-up lights",
        ipa: "/ˈbækʌp laɪts/",
        img: "vocabulary/unit5/back_up_lights.jpg",
        en: "White rear lamps that light up when the vehicle is in reverse.",
        vi: "Đèn trắng phía sau sáng khi xe được cài số lùi."
    }
},
{
    prompts: ["fuse", "cau chi"],
    data: {
        term: "Fuse",
        ipa: "/fjuːz/",
        img: "vocabulary/unit5/fuse.jpg",
        en: "Safety device that opens the circuit if current is too high.",
        vi: "Thiết bị bảo vệ mạch điện bằng cách tự ngắt khi quá dòng."
    }
},
{
    prompts: ["circuit breaker", "bo ngat mach"],
    data: {
        term: "Circuit breaker",
        ipa: "/ˈsɜːrkɪt ˈbreɪkər/",
        img: "vocabulary/unit5/circuit_breaker.jpg",
        en: "Protective device that interrupts current but can be reset.",
        vi: "Thiết bị bảo vệ có thể đặt lại sau khi bị ngắt."
    }
},
{
    prompts: ["ground", "noi dat"],
    data: {
        term: "Ground",
        ipa: "/ɡraʊnd/",
        img: "vocabulary/unit5/ground.jpg",
        en: "The return path for electrical current, usually the vehicle chassis.",
        vi: "Đường hồi của dòng điện thông qua khung gầm hoặc thân xe."
    }
},
{
    prompts: ["distributor", "bo chia dien"],
    data: {
        term: "Distributor",
        ipa: "/dɪˈstrɪbjətər/",
        img: "vocabulary/unit5/distributor.jpg",
        en: "A device that distributes high voltage current to each spark plug in the correct firing order.",
        vi: "Thiết bị phân phối dòng điện cao áp đến các bugi theo đúng thứ tự đánh lửa."
    }
},
{
    prompts: ["high tension wire", "day cao ap"],
    data: {
        term: "High tension wire",
        ipa: "/haɪ ˈtenʃən waɪər/",
        img: "vocabulary/unit5/high_tension_wire.jpg",
        en: "A cable that carries high voltage from the ignition coil to the spark plugs.",
        vi: "Dây dẫn truyền điện áp cao từ bô-bin đánh lửa đến bugi."
    }
},
{
    prompts: ["ignition coil", "bo bin danh lua"],
    data: {
        term: "Ignition coil",
        ipa: "/ɪɡˈnɪʃən kɔɪl/",
        img: "vocabulary/unit5/ignition_coil.jpg",
        en: "A transformer that increases battery voltage to create a spark.",
        vi: "Biến áp dùng để tăng điện áp từ ắc-quy nhằm tạo tia lửa điện."
    }
},
{
    prompts: ["breaker point", "vit lua"],
    data: {
        term: "Breaker point",
        ipa: "/ˈbreɪkər pɔɪnt/",
        img: "vocabulary/unit5/breaker_point.jpg",
        en: "A mechanical switch used in conventional ignition systems.",
        vi: "Công tắc cơ khí dùng trong hệ thống đánh lửa truyền thống."
    }
},
{
    prompts: ["condenser", "tu dien danh lua"],
    data: {
        term: "Condenser",
        ipa: "/kənˈdensər/",
        img: "vocabulary/unit5/condenser.jpg",
        en: "A capacitor used to reduce arcing at the breaker points.",
        vi: "Tụ điện dùng để giảm tia lửa điện tại vít lửa."
    }
},
{
    prompts: ["wiring harness", "bo day dien"],
    data: {
        term: "Wiring harness",
        ipa: "/ˈwaɪərɪŋ ˈhɑːrnəs/",
        img: "vocabulary/unit5/wiring_harness.jpg",
        en: "An organized set of wires and connectors in a vehicle electrical system.",
        vi: "Bộ dây điện và giắc nối được bố trí trong hệ thống điện ô tô."
    }
},

{
    prompts: ["dashboard", "bang tablo"],
    data: {
        term: "Dashboard",
        ipa: "/ˈdæʃbɔːrd/",
        img: "vocabulary/unit5/dashboard.jpg",
        en: "The control panel located in front of the driver.",
        vi: "Bảng điều khiển nằm phía trước người lái."
    }
},
//doc
{
    prompts: ["automobile", "o to", "xe hoi", "car"],
    data: { term: "Automobile", ipa: "/ˈɔtəmoʊˌbil/", img: "vocabulary/unit_doc/automobile.jpg", en: "A self-propelled vehicle used primarily on public roads.", vi: "Xe ô tô: Loại phương tiện tự hành sử dụng chủ yếu trên đường bộ để chở người hoặc hàng hóa." }
},
{
    prompts: ["engine", "dong co"],
    data: { term: "Engine", ipa: "/ˈɛnʤən/", img: "vocabulary/unit_doc/engine.jpg", en: "A machine that converts fuel energy into mechanical power.", vi: "Động cơ: Thiết bị chuyển đổi năng lượng từ nhiên liệu thành cơ năng để vận hành xe." }
},
{
    prompts: ["chassis", "khung gam", "sat xi"],
    data: { term: "Chassis", ipa: "/ˈʃæsi/", img: "vocabulary/unit_doc/chassis.jpg", en: "The structural lower part of a vehicle to which the running gear is attached.", vi: "Khung gầm: Phần kết cấu bên dưới của xe, nơi lắp đặt các hệ thống vận hành như treo, lái và truyền động." }
},
{
    prompts: ["drivetrain", "he thong truyen luc"],
    data: { term: "Drivetrain", ipa: "/ˈdraɪvˌtreɪn/", img: "vocabulary/unit_doc/drivetrain.jpg", en: "Systems that transmit power from the engine to the wheels.", vi: "Hệ thống truyền lực: Tập hợp các bộ phận truyền công suất từ động cơ tới bánh xe." }
},

{
    prompts: ["cylinder block", "than may"],
    data: { term: "Cylinder Block", ipa: "/ˈsɪləndər blɑk/", img: "vocabulary/unit_doc/cylinder_block.jpg", en: "The main supporting structure for the engine components.", vi: "Thân máy: Bộ phận chính của động cơ, chứa các xi lanh và hỗ trợ các chi tiết khác." }
},
{
    prompts: ["cylinder head", "nap may"],
    data: { term: "Cylinder Head", ipa: "/ˈsɪləndər hɛd/", img: "vocabulary/unit_doc/cylinder_head.jpg", en: "The component that forms the top of the combustion chamber.", vi: "Nắp máy: Phần đậy phía trên xi lanh, tạo thành buồng cháy và chứa các xupap." }
},
{
    prompts: ["piston", "pit tong"],
    data: { term: "Piston", ipa: "/ˈpɪstən/", img: "vocabulary/unit_doc/piston.jpg", en: "A cylindrical component that reciprocates inside the cylinder.", vi: "Pít-tông: Chi tiết chuyển động tịnh tiến trong xi lanh để nén và truyền lực." }
},
{
    prompts: ["crankshaft", "truc khuyu"],
    data: { term: "Crankshaft", ipa: "/ˈkræŋkˌʃæft/", img: "vocabulary/unit_doc/crankshaft.jpg", en: "It converts the reciprocating motion of the piston into rotary motion.", vi: "Trục khuỷu: Biến chuyển động tịnh tiến của pít-tông thành chuyển động quay." }
},
{
    prompts: ["connecting rod", "thanh truyen"],
    data: { term: "Connecting Rod", ipa: "/kəˈnɛktɪŋ rɑd/", img: "vocabulary/unit_doc/connecting_rod.jpg", en: "It connects the piston to the crankshaft to transmit force.", vi: "Thanh truyền: Liên kết pít-tông với trục khuỷu và truyền lực giữa hai bộ phận." }
},
{
    prompts: ["camshaft", "truc cam"],
    data: { term: "Camshaft", ipa: "/ˈkæmˌʃæft/", img: "vocabulary/unit_doc/camshaft.jpg", en: "A shaft with cams used to control the movement of valves.", vi: "Trục cam: Trục có các vấu cam dùng để điều khiển đóng mở xupap." }
},
{
    prompts: ["combustion chamber", "buong chay"],
    data: { term: "Combustion Chamber", ipa: "/kəmˈbʌsʧən ˈʧeɪmbər/", img: "vocabulary/unit_doc/combustion_chamber.jpg", en: "The space where the air-fuel mixture is burned.", vi: "Buồng cháy: Không gian nơi hỗn hợp không khí và nhiên liệu được đốt cháy." }
},
{
    prompts: ["flywheel", "banh da"],
    data: { term: "Flywheel", ipa: "/ˈflaɪˌwil/", img: "vocabulary/unit_doc/flywheel.jpg", en: "A heavy wheel that helps to achieve a uniform torque.", vi: "Bánh đà: Bánh quay có khối lượng lớn giúp ổn định chuyển động quay của động cơ." }
},
{
    prompts: ["intake valve", "xupap nap"],
    data: { term: "Intake Valve", ipa: "/ˈɪnˌteɪk vælv/", img: "vocabulary/unit_doc/intake_valve.jpg", en: "A valve that regulates the air or air-fuel mixture entering the cylinder.", vi: "Xupap nạp: Van điều khiển lượng không khí hoặc hòa khí đi vào xi lanh." }
},
{
    prompts: ["exhaust valve", "xupap thai"],
    data: { term: "Exhaust Valve", ipa: "/ɪgˈzɑst vælv/", img: "vocabulary/unit_doc/exhaust_valve.jpg", en: "A valve that allows burnt gases to escape from the cylinder.", vi: "Xupap thải: Van cho phép khí cháy thoát ra khỏi xi lanh." }
},
{
    prompts: ["piston ring", "xec mang"],
    data: { term: "Piston Ring", ipa: "/ˈpɪstən rɪŋ/", img: "vocabulary/unit_doc/piston_ring.jpg", en: "Rings that provide a tight seal between the piston and cylinder wall.", vi: "Xéc-măng: Vòng kín giữa pít-tông và xi lanh giúp giữ áp suất và ngăn rò rỉ." }
},
{
    prompts: ["spark plug", "bugi"],
    data: { term: "Spark Plug", ipa: "/spɑrk plʌg/", img: "vocabulary/unit_doc/spark_plug.jpg", en: "A device used in SI engines to ignite the fuel mixture.", vi: "Bu-gi: Thiết bị tạo tia lửa điện để đốt cháy hỗn hợp nhiên liệu." }
},
{
    prompts: ["gasket", "gioang"],
    data: { term: "Gasket", ipa: "/ˈgæskɪt/", img: "vocabulary/unit_doc/gasket.jpg", en: "A static seal used to prevent leakage between two surfaces.", vi: "Gioăng: Vật liệu làm kín giữa hai bề mặt để ngăn rò rỉ chất lỏng hoặc khí." }
},
{
    prompts: ["carburetor", "bo che hoa khi"],
    data: { term: "Carburetor", ipa: "/ˈkɑrbəˌreɪtər/", img: "vocabulary/unit_doc/carburetor.jpg", en: "A device that mixes fuel and air for combustion.", vi: "Bộ chế hòa khí: Thiết bị trộn nhiên liệu với không khí trước khi đưa vào buồng cháy." }
},
{
    prompts: ["fuel injector", "kim phun"],
    data: { term: "Fuel Injector", ipa: "/ˈfjuəl ɪnˈʤɛktər/", img: "vocabulary/unit_doc/fuel_injector.jpg", en: "A device that delivers a precise amount of atomized fuel.", vi: "Kim phun: Thiết bị phun nhiên liệu dạng sương vào buồng đốt với lưu lượng chính xác." }
},
{
    prompts: ["fuel pump", "bom nhien lieu"],
    data: { term: "Fuel Pump", ipa: "/ˈfjuəl pʌmp/", img: "vocabulary/unit_doc/fuel_pump.jpg", en: "A pump that forces fuel from the tank to the engine.", vi: "Bơm nhiên liệu: Thiết bị bơm nhiên liệu từ bình chứa đến động cơ." }
},
{
    prompts: ["intake manifold", "co gop nap"],
    data: { term: "Intake Manifold", ipa: "/ˈɪnˌteɪk ˈmænəˌfoʊld/", img: "vocabulary/unit_doc/intake_manifold.jpg", en: "Pipes that distribute air/fuel mixture to the intake valves.", vi: "Cổ góp nạp: Hệ thống ống phân phối không khí hoặc hòa khí vào các xi lanh." }
},
{
    prompts: ["exhaust manifold", "co gop thai"],
    data: { term: "Exhaust Manifold", ipa: "/ɪgˈzɑst ˈmænəˌfoʊld/", img: "vocabulary/unit_doc/exhaust_manifold.jpg", en: "Pipes that connect exhaust ports to the exhaust system.", vi: "Cổ góp thải: Hệ thống ống dẫn khí thải từ động cơ ra hệ thống xả." }
},
{
    prompts: ["coolant", "nuoc lam mat"],
    data: { term: "Coolant", ipa: "/ˈkulənt/", img: "vocabulary/unit_doc/coolant.jpg", en: "A liquid used to remove heat from the engine.", vi: "Nước làm mát: Chất lỏng dùng để hấp thụ và tản nhiệt cho động cơ." }
},

{
    prompts: ["radiator", "ket nuoc"],
    data: { term: "Radiator", ipa: "/ˈreɪdiˌeɪtər/", img: "vocabulary/unit_doc/radiator.jpg", en: "A heat exchanger that transfers heat to the outside air.", vi: "Két nước: Bộ trao đổi nhiệt giúp làm mát động cơ bằng cách tản nhiệt ra môi trường." }
},
{
    prompts: ["thermostat", "van hang nhiet"],
    data: { term: "Thermostat", ipa: "/ˈθɜrməˌstæt/", img: "vocabulary/unit_doc/thermostat.jpg", en: "A temperature-responsive valve that controls coolant flow.", vi: "Van hằng nhiệt: Thiết bị điều chỉnh dòng nước làm mát theo nhiệt độ động cơ." }
},
{
    prompts: ["water pump", "bom nuoc"],
    data: { term: "Water Pump", ipa: "/ˈwɔtər pʌmp/", img: "vocabulary/unit_doc/water_pump.jpg", en: "The part that moves coolant through the cooling system.", vi: "Bơm nước: Bộ phận tuần hoàn nước làm mát trong hệ thống làm mát động cơ." }
},
{
    prompts: ["lubrication system", "he thong boi tron"],
    data: { term: "Lubrication System", ipa: "/ˌlubrɪˈkeɪʃən ˈsɪstəm/", img: "vocabulary/unit_doc/lubrication_system.jpg", en: "System that maintains a continuous oil supply to the engine.", vi: "Hệ thống bôi trơn: Cung cấp dầu bôi trơn liên tục cho các chi tiết chuyển động của động cơ." }
},
{
    prompts: ["oil filter", "loc dau"],
    data: { term: "Oil Filter", ipa: "/ɔɪl ˈfɪltər/", img: "vocabulary/unit_doc/oil_filter.jpg", en: "A device that removes impurities from the engine oil.", vi: "Lọc dầu: Thiết bị loại bỏ cặn bẩn trong dầu bôi trơn." }
},
{
    prompts: ["oil pan", "cac te"],
    data: { term: "Oil Pan", ipa: "/ɔɪl pæn/", img: "vocabulary/unit_doc/oil_pan.jpg", en: "The reservoir at the bottom of the engine for oil storage.", vi: "Các-te dầu: Khoang chứa dầu bôi trơn ở đáy động cơ." }
},
{
    prompts: ["battery", "ac quy"],
    data: { term: "Battery", ipa: "/ˈbætəri/", img: "vocabulary/unit_doc/battery.jpg", en: "A device that converts chemical energy into electrical energy.", vi: "Ắc quy: Thiết bị lưu trữ và cung cấp điện năng cho xe." }
},
{
    prompts: ["alternator", "may phat dien xoay chieu"],
    data: { term: "Alternator", ipa: "/ˈɔltərˌneɪtər/", img: "vocabulary/unit_doc/alternator.jpg", en: "An AC generator that produces electrical energy while running.", vi: "Máy phát điện: Thiết bị tạo ra điện năng khi động cơ hoạt động." }
},
{
    prompts: ["starter motor", "may khoi dong"],
    data: { term: "Starter Motor", ipa: "/ˈstɑrtər ˈmoʊtər/", img: "vocabulary/unit_doc/starter_motor.jpg", en: "An electric motor used to crank the engine.", vi: "Máy khởi động: Động cơ điện dùng để quay trục khuỷu khi khởi động." }
},
{
    prompts: ["ignition system", "he thong danh lua"],
    data: { term: "Ignition System", ipa: "/ɪgˈnɪʃən ˈsɪstəm/", img: "vocabulary/unit_doc/ignition_system.jpg", en: "System that generates sparks to ignite the fuel mixture.", vi: "Hệ thống đánh lửa: Tạo tia lửa điện để đốt cháy hòa khí." }
},
{
    prompts: ["clutch", "ly hop", "con"],
    data: { term: "Clutch", ipa: "/klʌʧ/", img: "vocabulary/unit_doc/clutch.jpg", en: "A mechanical coupling between the engine and transmission.", vi: "Ly hợp: Bộ phận kết nối hoặc ngắt truyền động giữa động cơ và hộp số." }
},
{
    prompts: ["clutch disc", "dia ly hop"],
    data: { term: "Clutch Disc", ipa: "/klʌʧ dɪsk/", img: "vocabulary/unit_doc/clutch_disc.jpg", en: "The driven member splined to the input shaft.", vi: "Đĩa ly hợp: Chi tiết truyền mô-men từ động cơ sang hộp số." }
},
{
    prompts: ["pressure plate", "dia ep"],
    data: { term: "Pressure Plate", ipa: "/ˈprɛʃər pleɪt/", img: "vocabulary/unit_doc/pressure_plate.jpg", en: "A plate that squeezes the clutch disc.", vi: "Đĩa ép: Bộ phận tạo lực ép lên đĩa ly hợp để truyền lực." }
},
{
    prompts: ["release bearing", "bi ti"],
    data: { term: "Release Bearing", ipa: "/rɪˈlis ˈbɛrɪŋ/", img: "vocabulary/unit_doc/release_bearing.jpg", en: "A bearing used to disengage the clutch.", vi: "Bi tì: Ổ bi dùng để ngắt ly hợp khi đạp côn." }
},
{
    prompts: ["drive shaft", "truc cac dang"],
    data: { term: "Drive Shaft", ipa: "/draɪv ʃæft/", img: "vocabulary/unit_doc/drive_shaft.jpg", en: "A shaft that transmits torque.", vi: "Trục các-đăng: Trục truyền mô-men xoắn từ hộp số đến cầu xe." }
},
{
    prompts: ["universal joint", "khop cac dang"],
    data: { term: "Universal Joint", ipa: "/ˌjunəˈvɜrsəl ʤɔɪnt/", img: "vocabulary/unit_doc/universal_joint.jpg", en: "A joint that permits angular displacement.", vi: "Khớp các-đăng: Khớp nối cho phép truyền động ở các góc khác nhau." }
},
{
    prompts: ["cv joint", "khop dong toc"],
    data: { term: "CV Joint", ipa: "/si vi ʤɔɪnt/", img: "vocabulary/unit_doc/cv_joint.jpg", en: "Constant velocity joint.", vi: "Khớp đồng tốc: Khớp truyền động với tốc độ quay không đổi." }
},
{
    prompts: ["axle", "truc banh xe"],
    data: { term: "Axle", ipa: "/ˈæksəl/", img: "vocabulary/unit_doc/axle.jpg", en: "A shaft on which wheels are mounted.", vi: "Trục bánh xe: Trục nối bánh xe và truyền lực quay." }
},
{
    prompts: ["steering system", "he thong lai"],
    data: { term: "Steering System", ipa: "/ˈstɪrɪŋ ˈsɪstəm/", img: "vocabulary/unit_doc/steering_system.jpg", en: "Controls direction of the vehicle.", vi: "Hệ thống lái: Điều khiển hướng chuyển động của xe." }
},
{
    prompts: ["rack and pinion", "thanh rang banh rang"],
    data: { term: "Rack and Pinion", ipa: "/ræk ænd ˈpɪnjən/", img: "vocabulary/unit_doc/rack_and_pinion.jpg", en: "A common steering mechanism.", vi: "Thanh răng - bánh răng: Cơ cấu lái phổ biến chuyển đổi chuyển động quay thành tịnh tiến." }
},
{
    prompts: ["tie rod", "ro tuyn lai"],
    data: { term: "Tie Rod", ipa: "/ˈtaɪ rɑd/", img: "vocabulary/unit_doc/tie_rod.jpg", en: "Connects steering linkage.", vi: "Rô-tuyn lái: Thanh nối truyền chuyển động từ cơ cấu lái đến bánh xe." }
},
{
    prompts: ["braking system", "he thong phanh"],
    data: { term: "Braking System", ipa: "/ˈbreɪkɪŋ ˈsɪstəm/", img: "vocabulary/unit_doc/braking_system.jpg", en: "System to stop the vehicle.", vi: "Hệ thống phanh: Dùng để giảm tốc hoặc dừng xe." }
},
{
    prompts: ["master cylinder", "xi lanh chinh"],
    data: { term: "Master Cylinder", ipa: "/ˈmæstər ˈsɪləndər/", img: "vocabulary/unit_doc/master_cylinder.jpg", en: "Main hydraulic brake component.", vi: "Xi lanh chính: Bộ phận tạo áp suất thủy lực cho hệ thống phanh." }
},
{
    prompts: ["disc brake", "phanh dia"],
    data: { term: "Disc Brake", ipa: "/dɪsk breɪk/", img: "vocabulary/unit_doc/disc_brake.jpg", en: "Brake using pads and rotor.", vi: "Phanh đĩa: Hệ thống phanh sử dụng má phanh và đĩa quay." }
},
{
    prompts: ["drum brake", "phanh tang trong"],
    data: { term: "Drum Brake", ipa: "/drʌm breɪk/", img: "vocabulary/unit_doc/drum_brake.jpg", en: "Brake using shoes and drum.", vi: "Phanh tang trống: Hệ thống phanh dùng guốc phanh và tang trống." }
},

{
    prompts: ["caliper", "heo phanh"],
    data: { term: "Caliper", ipa: "/ˈkæləpər/", img: "vocabulary/unit_doc/caliper.jpg", en: "Holds brake pads and presses them against the disc.", vi: "Cùm phanh: Bộ phận giữ và ép má phanh vào đĩa phanh để tạo lực hãm." }
},
{
    prompts: ["suspension system", "he thong treo"],
    data: { term: "Suspension System", ipa: "/səˈspɛnʃən ˈsɪstəm/", img: "vocabulary/unit_doc/suspension_system.jpg", en: "Absorbs road shock and improves ride comfort.", vi: "Hệ thống treo: Hấp thụ dao động từ mặt đường và tăng độ êm ái khi vận hành." }
},
{
    prompts: ["shock absorber", "giam chan"],
    data: { term: "Shock Absorber", ipa: "/ʃɑk əbˈzɔrbər/", img: "vocabulary/unit_doc/shock_absorber.jpg", en: "Dampens spring oscillations.", vi: "Giảm chấn: Thiết bị giảm dao động của lò xo trong hệ thống treo." }
},
{
    prompts: ["coil spring", "lo xo cuon"],
    data: { term: "Coil Spring", ipa: "/kɔɪl sprɪŋ/", img: "vocabulary/unit_doc/coil_spring.jpg", en: "A helical spring that supports vehicle weight.", vi: "Lò xo cuộn: Lò xo dạng xoắn dùng để đỡ trọng lượng xe." }
},
{
    prompts: ["leaf spring", "nhip la"],
    data: { term: "Leaf Spring", ipa: "/lif sprɪŋ/", img: "vocabulary/unit_doc/leaf_spring.jpg", en: "A layered spring used in heavy vehicles.", vi: "Nhíp lá: Lò xo dạng lá xếp chồng, thường dùng cho xe tải." }
},
{
    prompts: ["turbocharger", "bo tang ap"],
    data: { term: "Turbocharger", ipa: "/ˈtɜrboʊˌʧɑrʤər/", img: "vocabulary/unit_doc/turbocharger.jpg", en: "Uses exhaust gases to increase engine power.", vi: "Bộ tăng áp: Thiết bị tận dụng khí xả để nén không khí và tăng công suất động cơ." }
},
{
    prompts: ["catalytic converter", "bo xuc tac"],
    data: { term: "Catalytic Converter", ipa: "/ˌkætəˈlɪtɪk kənˈvɜrtər/", img: "vocabulary/unit_doc/catalytic_converter.jpg", en: "Reduces harmful emissions.", vi: "Bộ xúc tác: Thiết bị xử lý khí thải để giảm các chất độc hại." }
},
{
    prompts: ["throttle valve", "buom ga"],
    data: { term: "Throttle Valve", ipa: "/ˈθrɑtəl vælv/", img: "vocabulary/unit_doc/throttle_valve.jpg", en: "Controls air intake into engine.", vi: "Bướm ga: Van điều chỉnh lượng không khí đi vào động cơ." }
},
{
    prompts: ["fuel tank", "binh nhien lieu"],
    data: { term: "Fuel Tank", ipa: "/ˈfjuəl tæŋk/", img: "vocabulary/unit_doc/fuel_tank.jpg", en: "Stores fuel for engine operation.", vi: "Bình nhiên liệu: Thùng chứa nhiên liệu cung cấp cho động cơ." }
},
{
    prompts: ["wheel", "banh xe"],
    data: { term: "Wheel", ipa: "/wiːl/", img: "vocabulary/unit_doc/wheel.jpg", en: "A rotating component that supports movement.", vi: "Bánh xe: Bộ phận quay giúp xe di chuyển." }
},
{
    prompts: ["tire", "lop xe"],
    data: { term: "Tire", ipa: "/taɪər/", img: "vocabulary/unit_doc/tire.jpg", en: "Rubber covering that provides grip.", vi: "Lốp xe: Lớp cao su tiếp xúc mặt đường, tạo độ bám." }
},
{
    prompts: ["rim", "vanh xe"],
    data: { term: "Rim", ipa: "/rɪm/", img: "vocabulary/unit_doc/rim.jpg", en: "Outer edge of the wheel.", vi: "Vành xe: Phần ngoài của bánh xe dùng để giữ lốp." }
},
{
    prompts: ["hub", "moay o"],
    data: { term: "Hub", ipa: "/hʌb/", img: "vocabulary/unit_doc/hub.jpg", en: "Central part of the wheel.", vi: "Moay-ơ: Phần trung tâm của bánh xe gắn với trục." }
},
{
    prompts: ["lug nut", "ecu banh xe"],
    data: { term: "Lug Nut", ipa: "/lʌg nʌt/", img: "vocabulary/unit_doc/lug_nut.jpg", en: "Secures wheel to hub.", vi: "Đai ốc bánh xe: Dùng để cố định bánh xe vào moay-ơ." }
},
{
    prompts: ["wheel alignment", "can chinh banh xe"],
    data: { term: "Wheel Alignment", ipa: "/əˈlaɪnmənt/", img: "vocabulary/unit_doc/wheel_alignment.jpg", en: "Adjustment of wheel angles.", vi: "Cân chỉnh bánh xe: Điều chỉnh góc đặt bánh xe để xe chạy ổn định." }
},
{
    prompts: ["wheel balancing", "can bang dong"],
    data: { term: "Wheel Balancing", ipa: "/ˈbælənsɪŋ/", img: "vocabulary/unit_doc/wheel_balancing.jpg", en: "Balances weight distribution of wheel.", vi: "Cân bằng động: Phân bố đều khối lượng bánh xe khi quay." }
},
{
    prompts: ["abs", "chong bo cung"],
    data: { term: "ABS", ipa: "/ˌeɪ biː ˈɛs/", img: "vocabulary/unit_doc/abs.jpg", en: "Prevents wheel lock during braking.", vi: "Hệ thống ABS: Ngăn bánh xe bị bó cứng khi phanh." }
},
{
    prompts: ["ecu", "bo dieu khien"],
    data: { term: "ECU", ipa: "/ˌiː siː ˈjuː/", img: "vocabulary/unit_doc/ecu.jpg", en: "Controls electronic systems.", vi: "Bộ điều khiển ECU: Trung tâm điều khiển các hệ thống điện tử của xe." }
},
{
    prompts: ["sensor", "cam bien"],
    data: { term: "Sensor", ipa: "/ˈsɛnsər/", img: "vocabulary/unit_doc/sensor.jpg", en: "Detects and sends signals.", vi: "Cảm biến: Thiết bị thu nhận tín hiệu và gửi về bộ điều khiển." }
},
{
    prompts: ["oxygen sensor", "cam bien oxy"],
    data: { term: "Oxygen Sensor", ipa: "/ˈɑksɪʤən ˈsɛnsər/", img: "vocabulary/unit_doc/oxygen_sensor.jpg", en: "Measures oxygen level in exhaust.", vi: "Cảm biến oxy: Đo lượng oxy trong khí thải để tối ưu hòa khí." }
},
{
    prompts: ["maf sensor", "cam bien luu luong"],
    data: { term: "MAF Sensor", ipa: "/mæf/", img: "vocabulary/unit_doc/maf_sensor.jpg", en: "Measures air intake flow.", vi: "Cảm biến lưu lượng khí: Đo lượng không khí nạp vào động cơ." }
},
{
    prompts: ["map sensor", "cam bien ap suat"],
    data: { term: "MAP Sensor", ipa: "/mæp/", img: "vocabulary/unit_doc/map_sensor.jpg", en: "Measures intake manifold pressure.", vi: "Cảm biến áp suất: Đo áp suất trong đường ống nạp." }
},
{
    prompts: ["coolant sensor", "cam bien nhiet do"],
    data: { term: "Coolant Sensor", ipa: "/ˈkulənt ˈsɛnsər/", img: "vocabulary/unit_doc/coolant_sensor.jpg", en: "Measures engine temperature.", vi: "Cảm biến nhiệt độ nước: Đo nhiệt độ nước làm mát động cơ." }
},
{
    prompts: ["knock sensor", "cam bien kich no"],
    data: { term: "Knock Sensor", ipa: "/nɑk ˈsɛnsər/", img: "vocabulary/unit_doc/knock_sensor.jpg", en: "Detects abnormal combustion.", vi: "Cảm biến kích nổ: Phát hiện hiện tượng cháy kích nổ trong động cơ." }
},

{
    prompts: ["relay", "ro le"],
    data: { term: "Relay", ipa: "/ˈriːleɪ/", img: "vocabulary/unit_doc/relay.jpg", en: "An electrically operated switch.", vi: "Rơ-le: Công tắc điện điều khiển bằng dòng điện để đóng/ngắt mạch." }
},

{
    prompts: ["wiring harness", "day dien"],
    data: { term: "Wiring Harness", ipa: "/ˈwaɪərɪŋ/", img: "vocabulary/unit_doc/wiring_harness.jpg", en: "Organized set of wires.", vi: "Dây điện: Hệ thống dây dẫn điện kết nối các thiết bị trong xe." }
},

{
    prompts: ["taillight", "den hau"],
    data: { term: "Taillight", ipa: "/ˈteɪlˌlaɪt/", img: "vocabulary/unit_doc/taillight.jpg", en: "Rear signal light.", vi: "Đèn hậu: Đèn phía sau dùng để báo hiệu và nhận diện xe." }
},
{
    prompts: ["turn signal", "den xi nhan"],
    data: { term: "Turn Signal", ipa: "/tɜrn ˈsɪgnəl/", img: "vocabulary/unit_doc/turn_signal.jpg", en: "Indicates turning direction.", vi: "Đèn xi-nhan: Đèn báo hiệu hướng rẽ của xe." }
},
{
    prompts: ["speedometer", "dong ho toc do"],
    data: { term: "Speedometer", ipa: "/spiˈdɑmɪtər/", img: "vocabulary/unit_doc/speedometer.jpg", en: "Measures speed.", vi: "Đồng hồ tốc độ: Thiết bị hiển thị tốc độ di chuyển của xe." }
},
{
    prompts: ["odometer", "dong ho quang duong"],
    data: { term: "Odometer", ipa: "/oʊˈdɑmɪtər/", img: "vocabulary/unit_doc/odometer.jpg", en: "Measures distance traveled.", vi: "Công-tơ-mét: Thiết bị đo quãng đường xe đã đi." }
},
{
    prompts: ["seat belt", "day an toan"],
    data: { term: "Seat Belt", ipa: "/sit bɛlt/", img: "vocabulary/unit_doc/seat_belt.jpg", en: "Safety restraint device.", vi: "Dây an toàn: Thiết bị giữ người ngồi an toàn khi xảy ra va chạm." }
},
{
    prompts: ["airbag", "tui khi"],
    data: { term: "Airbag", ipa: "/ˈɛrˌbæg/", img: "vocabulary/unit_doc/airbag.jpg", en: "Inflatable safety cushion.", vi: "Túi khí: Thiết bị an toàn bung ra để bảo vệ người khi tai nạn." }
},
{
    prompts: ["mirror", "guong chieu hau"],
    data: { term: "Mirror", ipa: "/ˈmɪrər/", img: "vocabulary/unit_doc/mirror.jpg", en: "Reflects rear view.", vi: "Gương chiếu hậu: Giúp quan sát phía sau xe." }
},
{
    prompts: ["windshield", "kinh chan gio"],
    data: { term: "Windshield", ipa: "/ˈwɪndˌʃild/", img: "vocabulary/unit_doc/windshield.jpg", en: "Front protective glass.", vi: "Kính chắn gió: Kính phía trước bảo vệ người lái khỏi gió và bụi." }
},
{
    prompts: ["wiper", "can gat mua"],
    data: { term: "Wiper", ipa: "/ˈwaɪpər/", img: "vocabulary/unit_doc/wiper.jpg", en: "Cleans windshield.", vi: "Cần gạt mưa: Thiết bị lau nước trên kính chắn gió." }
},
{
    prompts: ["door", "cua xe"],
    data: { term: "Door", ipa: "/dɔr/", img: "vocabulary/unit_doc/door.jpg", en: "Provides access to cabin.", vi: "Cửa xe: Bộ phận cho phép ra vào khoang hành khách." }
},
{
    prompts: ["hood", "nap capo"],
    data: { term: "Hood", ipa: "/hʊd/", img: "vocabulary/unit_doc/hood.jpg", en: "Covers engine compartment.", vi: "Nắp capo: Nắp che khoang động cơ phía trước." }
},
{
    prompts: ["trunk", "cop sau"],
    data: { term: "Trunk", ipa: "/trʌŋk/", img: "vocabulary/unit_doc/trunk.jpg", en: "Rear storage compartment.", vi: "Cốp sau: Khoang chứa đồ phía sau xe." }
},
{
    prompts: ["bumper", "can xe"],
    data: { term: "Bumper", ipa: "/ˈbʌmpər/", img: "vocabulary/unit_doc/bumper.jpg", en: "Absorbs minor impacts.", vi: "Cản xe: Bộ phận giảm chấn khi va chạm nhẹ." }
},
{
    prompts: ["fender", "ve banh xe"],
    data: { term: "Fender", ipa: "/ˈfɛndər/", img: "vocabulary/unit_doc/fender.jpg", en: "Covers wheel area.", vi: "Vè bánh xe: Che chắn khu vực bánh xe khỏi bùn và nước." }
},
{
    prompts: ["grille", "luoi tan nhiet"],
    data: { term: "Grille", ipa: "/grɪl/", img: "vocabulary/unit_doc/grille.jpg", en: "Allows airflow to radiator.", vi: "Lưới tản nhiệt: Cho phép không khí đi vào làm mát động cơ." }
},
{
    prompts: ["roof", "mai xe"],
    data: { term: "Roof", ipa: "/ruf/", img: "vocabulary/unit_doc/roof.jpg", en: "Top cover of vehicle.", vi: "Mái xe: Phần trên cùng bảo vệ khoang hành khách." }
},
{
    prompts: ["seat", "ghe ngoi"],
    data: { term: "Seat", ipa: "/sit/", img: "vocabulary/unit_doc/seat.jpg", en: "Provides seating for passengers.", vi: "Ghế ngồi: Nơi người lái và hành khách ngồi." }
},
{
    prompts: ["steering wheel", "vo lang"],
    data: { term: "Steering Wheel", ipa: "/ˈstɪrɪŋ wil/", img: "vocabulary/unit_doc/steering_wheel.jpg", en: "Controls vehicle direction.", vi: "Vô lăng: Bộ phận điều khiển hướng di chuyển của xe." }
},
{
    prompts: ["pedal", "ban dap"],
    data: { term: "Pedal", ipa: "/ˈpɛdl/", img: "vocabulary/unit_doc/pedal.jpg", en: "Foot-operated control.", vi: "Bàn đạp: Bộ phận điều khiển bằng chân như ga, phanh, côn." }
},
{
    prompts: ["gear lever", "can so"],
    data: { term: "Gear Lever", ipa: "/gɪr ˈlɛvər/", img: "vocabulary/unit_doc/gear_lever.jpg", en: "Used to change gears.", vi: "Cần số: Dùng để thay đổi cấp số trong hộp số." }
},
// ... abbreviation ...
{
    prompts: ["abs", "phanh chong bo cung"],
    data: {
        term: "ABS",
        ipa: "/ˌæntiˈlɑk breɪk ˈsɪstəm/",
        img: "vocabulary/abbreviation/abs.jpg",
        en: "Anti-lock Braking System; prevents wheel lockup during braking.",
        vi: "ABS: Hệ thống phanh chống bó cứng giúp bánh xe không bị khóa khi phanh gấp, duy trì khả năng điều khiển."
    }
},
{
    prompts: ["bdc", "diem chet duoi"],
    data: {
        term: "BDC",
        ipa: "/ˈbɑtəm dɛd ˈsɛntər/",
        img: "vocabulary/abbreviation/bdc.jpg",
        en: "Bottom Dead Center; the lowest point of piston travel.",
        vi: "BDC: Điểm chết dưới, vị trí thấp nhất của pít-tông trong xi lanh."
    }
},
{
    prompts: ["tdc", "diem chet tren"],
    data: {
        term: "TDC",
        ipa: "/tɑp dɛd ˈsɛntər/",
        img: "vocabulary/abbreviation/tdc.jpg",
        en: "Top Dead Center; the highest point of piston travel.",
        vi: "TDC: Điểm chết trên, vị trí cao nhất của pít-tông trong xi lanh."
    }
},
{
    prompts: ["bhp", "ma luc phanh"],
    data: {
        term: "BHP",
        ipa: "/breɪk ˈhɔrsˌpaʊər/",
        img: "vocabulary/abbreviation/bhp.jpg",
        en: "Brake Horsepower; power measured at the engine's output shaft.",
        vi: "BHP: Mã lực phanh, công suất thực đo tại trục ra của động cơ."
    }
},
{
    prompts: ["ci", "dong co diesel", "chay do nen"],
    data: {
        term: "CI",
        ipa: "/kəmˈprɛʃən ɪgˈnɪʃən/",
        img: "vocabulary/abbreviation/ci.jpg",
        en: "Compression Ignition; fuel ignites by compression heat.",
        vi: "CI: Động cơ cháy do nén, nhiên liệu tự bốc cháy nhờ nhiệt độ cao khi nén."
    }
},
{
    prompts: ["si", "dong co xang"],
    data: {
        term: "SI",
        ipa: "/spɑrk ɪgˈnɪʃən/",
        img: "vocabulary/abbreviation/si.jpg",
        en: "Spark Ignition; ignition by spark plug.",
        vi: "SI: Động cơ đánh lửa cưỡng bức, sử dụng bugi để đốt cháy hòa khí."
    }
},
{
    prompts: ["cv", "dong toc"],
    data: {
        term: "CV",
        ipa: "/ˈkɑnstənt vəˈlɑsəti/",
        img: "vocabulary/abbreviation/cv.jpg",
        en: "Constant Velocity.",
        vi: "CV: Đồng tốc, chỉ các cơ cấu truyền động giữ tốc độ quay ổn định."
    }
},
{
    prompts: ["cvt", "hop so vo cap"],
    data: {
        term: "CVT",
        ipa: "/kənˈtɪnjuəsli ˈvɛriəbəl/",
        img: "vocabulary/abbreviation/cvt.jpg",
        en: "Continuously Variable Transmission.",
        vi: "CVT: Hộp số vô cấp, thay đổi tỉ số truyền liên tục không theo cấp số."
    }
},
{
    prompts: ["fwd", "cau truoc"],
    data: {
        term: "FWD",
        ipa: "/frʌnt wil draɪv/",
        img: "vocabulary/abbreviation/fwd.jpg",
        en: "Front-Wheel Drive.",
        vi: "FWD: Dẫn động cầu trước, truyền lực đến hai bánh trước."
    }
},
{
    prompts: ["rwd", "cau sau"],
    data: {
        term: "RWD",
        ipa: "/rɪr wil draɪv/",
        img: "vocabulary/abbreviation/rwd.jpg",
        en: "Rear-Wheel Drive.",
        vi: "RWD: Dẫn động cầu sau, truyền lực đến hai bánh sau."
    }
},
{
    prompts: ["awd", "4wd", "dan dong 4 banh"],
    data: {
        term: "AWD / 4WD",
        ipa: "/fɔr wil draɪv/",
        img: "vocabulary/abbreviation/awd.jpg",
        en: "All/Four Wheel Drive.",
        vi: "AWD/4WD: Dẫn động 4 bánh, truyền lực đến tất cả các bánh xe."
    }
},
{
    prompts: ["ecm", "hop dieu khien dong co"],
    data: {
        term: "ECM",
        ipa: "/ɪlɛkˈtrɑnɪk kənˈtroʊl/",
        img: "vocabulary/abbreviation/ecm.jpg",
        en: "Electronic Control Module.",
        vi: "ECM: Hộp điều khiển điện tử quản lý hoạt động động cơ."
    }
},
{
    prompts: ["egr", "tuan hoan khi xa"],
    data: {
        term: "EGR",
        ipa: "/ɪgˈzɔst gæs ˌriˌsɜrkjəˈleɪʃən/",
        img: "vocabulary/abbreviation/egr.jpg",
        en: "Exhaust Gas Recirculation.",
        vi: "EGR: Hệ thống tuần hoàn khí xả nhằm giảm khí thải NOx."
    }
},
{
    prompts: ["ohv", "xupap treo"],
    data: {
        term: "OHV",
        ipa: "/ˈoʊvərˌhɛd vælv/",
        img: "vocabulary/abbreviation/ohv.jpg",
        en: "Overhead Valve.",
        vi: "OHV: Cơ cấu xupap treo, đặt van trên nắp máy."
    }
},
{
    prompts: ["ohc", "truc cam treo"],
    data: {
        term: "OHC",
        ipa: "/ˈoʊvərˌhɛd ˈkæmˌʃæft/",
        img: "vocabulary/abbreviation/ohc.jpg",
        en: "Overhead Camshaft.",
        vi: "OHC: Trục cam đặt trên nắp máy."
    }
},
{
    prompts: ["dohc", "truc cam kep"],
    data: {
        term: "DOHC",
        ipa: "/ˈdʌbəl ˈoʊvərˌhɛd/",
        img: "vocabulary/abbreviation/dohc.jpg",
        en: "Double Overhead Camshaft.",
        vi: "DOHC: Hệ thống hai trục cam điều khiển riêng xupap nạp và xả."
    }
},
{
    prompts: ["sohc", "truc cam don"],
    data: {
        term: "SOHC",
        ipa: "/ˈsɪŋɡəl ˈoʊvərˌhɛd/",
        img: "vocabulary/abbreviation/sohc.jpg",
        en: "Single Overhead Camshaft.",
        vi: "SOHC: Hệ thống một trục cam điều khiển xupap."
    }
},
{
    prompts: ["pcv", "thong gio carte"],
    data: {
        term: "PCV",
        ipa: "/ˈpɑzətɪv ˈkræŋkˌkeɪs/",
        img: "vocabulary/abbreviation/pcv.jpg",
        en: "Positive Crankcase Ventilation.",
        vi: "PCV: Hệ thống thông gió các-te, tái tuần hoàn khí thải trong động cơ."
    }
},
{
    prompts: ["vin", "so khung xe"],
    data: {
        term: "VIN",
        ipa: "/ˈvi-aɪ-ɛn/",
        img: "vocabulary/abbreviation/vin.jpg",
        en: "Vehicle Identification Number.",
        vi: "VIN: Mã số nhận dạng xe duy nhất."
    }
},
{
    prompts: ["rpm", "vong quay phut"],
    data: {
        term: "RPM",
        ipa: "/ˌrɛvəˈluʃənz/",
        img: "vocabulary/abbreviation/rpm.jpg",
        en: "Revolutions Per Minute.",
        vi: "RPM: Số vòng quay mỗi phút của động cơ."
    }
},


{
    prompts: ["lpg", "khi hoa long"],
    data: {
        term: "LPG",
        ipa: "/ˈlɪkwəˌfaɪd pəˈtroʊliəm/",
        img: "vocabulary/abbreviation/lpg.jpg",
        en: "Liquefied Petroleum Gas; used as fuel.",
        vi: "LPG: Khí dầu mỏ hóa lỏng, nhiên liệu khí dùng thay thế xăng hoặc diesel."
    }
},
{
    prompts: ["cng", "khi nen tu nhien"],
    data: {
        term: "CNG",
        ipa: "/kəmˈprɛst ˈnæʧərəl gæs/",
        img: "vocabulary/abbreviation/cng.jpg",
        en: "Compressed Natural Gas.",
        vi: "CNG: Khí thiên nhiên nén, nhiên liệu sạch dùng cho động cơ."
    }
},
{
    prompts: ["sae", "tieu chuan o to"],
    data: {
        term: "SAE",
        ipa: "/ɛs-eɪ-i/",
        img: "vocabulary/abbreviation/sae.jpg",
        en: "Society of Automotive Engineers.",
        vi: "SAE: Hiệp hội kỹ sư ô tô, tổ chức xây dựng tiêu chuẩn kỹ thuật."
    }
},
{
    prompts: ["nm", "mo men xoan"],
    data: {
        term: "Nm",
        ipa: "/ˈnutən ˈmitər/",
        img: "vocabulary/abbreviation/nm.jpg",
        en: "Newton metre; unit of torque.",
        vi: "Nm: Đơn vị đo mô-men xoắn của động cơ."
    }
},
{
    prompts: ["mph", "dam tren gio"],
    data: {
        term: "MPH",
        ipa: "/maɪlz pər aʊər/",
        img: "vocabulary/abbreviation/mph.jpg",
        en: "Miles Per Hour.",
        vi: "MPH: Đơn vị đo tốc độ theo dặm trên giờ."
    }
},
{
    prompts: ["mpg", "tieu hao nhien lieu"],
    data: {
        term: "MPG",
        ipa: "/maɪlz pər ˈgælən/",
        img: "vocabulary/abbreviation/mpg.jpg",
        en: "Miles Per Gallon.",
        vi: "MPG: Đơn vị đo mức tiêu hao nhiên liệu theo dặm trên gallon."
    }
},
{
    prompts: ["din", "tieu chuan duc"],
    data: {
        term: "DIN",
        ipa: "/di-aɪ-ɛn/",
        img: "vocabulary/abbreviation/din.jpg",
        en: "German standard for power measurement.",
        vi: "DIN: Tiêu chuẩn công nghiệp Đức dùng để đo công suất động cơ."
    }
},
{
    prompts: ["di", "phun truc tiep"],
    data: {
        term: "DI",
        ipa: "/dəˈrɛkt ɪnˈʤɛkʃən/",
        img: "vocabulary/abbreviation/di.jpg",
        en: "Direct Injection.",
        vi: "DI: Hệ thống phun nhiên liệu trực tiếp vào buồng cháy."
    }
},
{
    prompts: ["idi", "phun gian tiep"],
    data: {
        term: "IDI",
        ipa: "/ˌɪndəˈrɛkt ɪnˈʤɛkʃən/",
        img: "vocabulary/abbreviation/idi.jpg",
        en: "Indirect Injection.",
        vi: "IDI: Hệ thống phun nhiên liệu vào buồng phụ trước khi vào xi lanh."
    }
},
{
    prompts: ["tdi", "diesel tang ap"],
    data: {
        term: "TDI",
        ipa: "/ˈtɜrboʊ/",
        img: "vocabulary/abbreviation/tdi.jpg",
        en: "Turbocharged Direct Injection.",
        vi: "TDI: Động cơ diesel sử dụng tăng áp và phun trực tiếp."
    }
},
{
    prompts: ["ron", "chi so octan"],
    data: {
        term: "RON",
        ipa: "/ˈɑkteɪn/",
        img: "vocabulary/abbreviation/ron.jpg",
        en: "Research Octane Number.",
        vi: "RON: Chỉ số octan đo khả năng chống kích nổ của xăng."
    }
},
{
    prompts: ["mon", "octan motor"],
    data: {
        term: "MON",
        ipa: "/ˈmoʊtər/",
        img: "vocabulary/abbreviation/mon.jpg",
        en: "Motor Octane Number.",
        vi: "MON: Chỉ số octan đo trong điều kiện tải cao."
    }
},
{
    prompts: ["ifs", "treo doc lap truoc"],
    data: {
        term: "IFS",
        ipa: "/ˌɪndɪˈpɛndənt/",
        img: "vocabulary/abbreviation/ifs.jpg",
        en: "Independent Front Suspension.",
        vi: "IFS: Hệ thống treo trước độc lập."
    }
},
{
    prompts: ["irs", "treo doc lap sau"],
    data: {
        term: "IRS",
        ipa: "/ˌɪndɪˈpɛndənt/",
        img: "vocabulary/abbreviation/irs.jpg",
        en: "Independent Rear Suspension.",
        vi: "IRS: Hệ thống treo sau độc lập."
    }
},
{
    prompts: ["pto", "trich cong suat"],
    data: {
        term: "PTO",
        ipa: "/ˈpaʊər/",
        img: "vocabulary/abbreviation/pto.jpg",
        en: "Power Take-Off.",
        vi: "PTO: Bộ trích công suất từ hộp số để vận hành thiết bị phụ."
    }
},
{
    prompts: ["gvw", "tong trong tai xe"],
    data: {
        term: "GVW",
        ipa: "/groʊs/",
        img: "vocabulary/abbreviation/gvw.jpg",
        en: "Gross Vehicle Weight.",
        vi: "GVW: Tổng trọng lượng tối đa của xe bao gồm tải trọng."
    }
},
{
    prompts: ["gcw", "trong tai doan xe"],
    data: {
        term: "GCW",
        ipa: "/groʊs/",
        img: "vocabulary/abbreviation/gcw.jpg",
        en: "Gross Combination Weight.",
        vi: "GCW: Tổng trọng lượng của xe kéo và rơ-moóc."
    }
},
{
    prompts: ["hgv", "xe tai nang"],
    data: {
        term: "HGV",
        ipa: "/ˈhɛvi/",
        img: "vocabulary/abbreviation/hgv.jpg",
        en: "Heavy Goods Vehicle.",
        vi: "HGV: Xe tải hạng nặng dùng vận chuyển hàng hóa lớn."
    }
},
{
    prompts: ["maf", "luu luong khi"],
    data: {
        term: "MAF",
        ipa: "/mæs ɛr/",
        img: "vocabulary/abbreviation/maf.jpg",
        en: "Mass Air Flow.",
        vi: "MAF: Cảm biến đo lưu lượng khối không khí vào động cơ."
    }
},
{
    prompts: ["map", "ap suat nap"],
    data: {
        term: "MAP",
        ipa: "/ˈmænəˌfoʊld/",
        img: "vocabulary/abbreviation/map.jpg",
        en: "Manifold Absolute Pressure.",
        vi: "MAP: Cảm biến đo áp suất tuyệt đối đường ống nạp."
    }
},
{
    prompts: ["nvh", "do on rung xoc"],
    data: {
        term: "NVH",
        ipa: "/nɔɪz/",
        img: "vocabulary/abbreviation/nvh.jpg",
        en: "Noise, Vibration, Harshness.",
        vi: "NVH: Độ ồn, rung và xóc – tiêu chí đánh giá độ êm ái của xe."
    }
},
{
    prompts: ["oem", "phu tung chinh hang"],
    data: {
        term: "OEM",
        ipa: "/oʊ-i-ɛm/",
        img: "vocabulary/abbreviation/oem.jpg",
        en: "Original Equipment Manufacturer.",
        vi: "OEM: Nhà sản xuất thiết bị gốc, cung cấp phụ tùng chính hãng."
    }
},
{
    prompts: ["pc", "xe cho nguoi"],
    data: {
        term: "PC",
        ipa: "/ˈpæsənʤər/",
        img: "vocabulary/abbreviation/pc.jpg",
        en: "Passenger Car.",
        vi: "PC: Xe chở người, thiết kế để vận chuyển hành khách."
    }
},
{
    prompts: ["suv", "xe the thao da dung"],
    data: {
        term: "SUV",
        ipa: "/ɛs-ju-vi/",
        img: "vocabulary/abbreviation/suv.jpg",
        en: "Sport Utility Vehicle.",
        vi: "SUV: Xe thể thao đa dụng, phù hợp nhiều loại địa hình."
    }
},
{
    prompts: ["iac", "dieu khien khong tai"],
    data: {
        term: "IAC",
        ipa: "/ˈaɪdəl/",
        img: "vocabulary/abbreviation/iac.jpg",
        en: "Idle Air Control.",
        vi: "IAC: Van điều khiển lượng không khí khi động cơ chạy không tải."
    }
},
{
    prompts: ["ldc", "diem chet duoi"],
    data: {
        term: "LDC",
        ipa: "/ˈloʊər/",
        img: "vocabulary/abbreviation/ldc.jpg",
        en: "Lower Dead Center.",
        vi: "LDC: Điểm chết dưới, tương đương BDC."
    }
},
{
    prompts: ["btdc", "truoc diem chet tren"],
    data: {
        term: "BTDC",
        ipa: "/bɪˈfɔr/",
        img: "vocabulary/abbreviation/btdc.jpg",
        en: "Before Top Dead Center.",
        vi: "BTDC: Góc trước điểm chết trên, dùng để xác định thời điểm đánh lửa."
    }
},
{
    prompts: ["gdi", "phun xang truc tiep"],
    data: {
        term: "GDI",
        ipa: "/ˌʤi-di-aɪ/",
        img: "vocabulary/abbreviation/gdi.jpg",
        en: "Gasoline Direct Injection.",
        vi: "GDI: Hệ thống phun xăng trực tiếp vào buồng cháy."
    }
},
{
    prompts: ["cv joint", "khop dong toc"],
    data: {
        term: "CV Joint",
        ipa: "/si-vi/",
        img: "vocabulary/abbreviation/cv_joint.jpg",
        en: "Constant Velocity Joint.",
        vi: "CV Joint: Khớp đồng tốc truyền lực ổn định ở mọi góc quay."
    }
}


         
            ],
            specialCases: [
                { keywords: ["bye", "tam biet"], reply: "Tạm biệt bạn! 🤖" },
                { keywords: ["thanks", "cam on", "ok", "hi", "hello"], reply: "Rất vui được hỗ trợ! 🤖" }
            ],
            fallback: [ "Tôi chưa tìm thấy thuật ngữ này. Hãy thử các thuật ngữ khác nhé! 🤖" ]
        };

        const AVATAR_BOT = `<div class="mg-avatar mg-avatar-bot">🤖</div>`;
        const AVATAR_USER = `<div class="mg-avatar mg-avatar-user">👤</div>`;

        // HÀM TÌM CỤM TỪ CHUẨN NHẤT
        const findBestMatch = (input, dictionary) => {
            const normalized = input.toLowerCase();

            return dictionary
                .flatMap(item =>
                    item.prompts.map(p => ({
                        prompt: p.toLowerCase(),
                        item
                    }))
                )
                .filter(p => normalized.includes(p.prompt))
                .sort((a, b) => b.prompt.length - a.prompt.length)[0]?.item;
        };

        function toggleChat() {
            const win = document.getElementById('mg-chat-window');
            win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
        }

        function initializeChat() {
            const inputField = document.getElementById("chat-input");
            const sendBtn = document.getElementById("send-btn");
            const suggestionList = document.getElementById("autocomplete-list");

            let currentFocus = -1;

            const allSuggestions = [];
            chatData.knowledgeBase.forEach(item => {
                item.prompts.forEach(p => allSuggestions.push(p));
            });

            function sendMessage() {
                const input = inputField.value.trim();
                if (input !== "") {
                    addUserMessage(input);
                    processResponse(input);
                    inputField.value = "";
                    sendBtn.disabled = true;
                    closeSuggestions();
                }
            }

            inputField.addEventListener("input", function() {
                const val = this.value;
                closeSuggestions();
                if (!val) return false;
                currentFocus = -1;

                const matches = allSuggestions.filter(s => s.toLowerCase().includes(val.toLowerCase())).slice(0, 5);
                
                if (matches.length > 0) {
                    suggestionList.style.display = "block";
                    matches.forEach((match, index) => {
                        const item = document.createElement("div");
                        item.className = "mg-suggestion-item";
                        item.innerHTML = `<span class="mg-suggestion-icon">🔍</span> <span>${match}</span>`;
                        item.addEventListener("click", function() {
                            inputField.value = match;
                            sendMessage();
                        });
                        suggestionList.appendChild(item);
                    });
                }
            });

            inputField.addEventListener("keydown", function(e) {
                const items = suggestionList.getElementsByClassName("mg-suggestion-item");
                if (e.key === "ArrowDown") {
                    currentFocus++;
                    addActive(items);
                } else if (e.key === "ArrowUp") {
                    currentFocus--;
                    addActive(items);
                } else if (e.key === "Enter") {
                    if (currentFocus > -1) {
                        if (items[currentFocus]) items[currentFocus].click();
                        e.preventDefault();
                    } else {
                        sendMessage();
                    }
                } else if (e.key === "Escape") {
                    closeSuggestions();
                }
            });

            function addActive(items) {
                if (!items) return false;
                removeActive(items);
                if (currentFocus >= items.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = items.length - 1;
                items[currentFocus].classList.add("active");
                items[currentFocus].scrollIntoView({ block: 'nearest' });
            }

            function removeActive(items) {
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove("active");
                }
            }

            function closeSuggestions() {
                suggestionList.innerHTML = "";
                suggestionList.style.display = "none";
            }

            document.addEventListener("click", (e) => {
                if (e.target !== inputField) closeSuggestions();
            });

            sendBtn.addEventListener("click", sendMessage);
            inputField.addEventListener("input", () => { 
                sendBtn.disabled = inputField.value.trim() === ""; 
            });
            sendBtn.disabled = true;
        }

        function addUserMessage(text) {
            const container = document.getElementById("mg-messages");
            const row = document.createElement("div");
            row.className = "mg-message-row mg-row-user";
            row.innerHTML = `${AVATAR_USER}<div class="mg-msg mg-msg-user">${text}</div>`;
            container.appendChild(row);
            
            const botRow = document.createElement("div");
            botRow.className = "mg-message-row";
            botRow.id = "mg-bot-temp";
            botRow.innerHTML = `${AVATAR_BOT}<div class="mg-msg mg-msg-bot italic opacity-60 text-xs">Thinking...</div>`;
            container.appendChild(botRow);
            
            container.scrollTop = container.scrollHeight;
        }

        function strnormalize(str) {
            let AccentsMap = ["aàảãáạăằẳẵắặâầẩẫấậ", "dđ", "eèẻẽéẹêềểễếệ", "iìỉĩíị", "oòỏõóọôồổỗốộơờởỡớợ", "uùủũúụưừửữứự", "yỳỷỹýỵ"];
            for (let i = 0; i < AccentsMap.length; i++) {
                let re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
                str = str.replace(re, AccentsMap[i][0]);
            }
            return str.replace(/\s+/g, ' ').trim().toLowerCase();
        }

        function processResponse(input) {
            const text = strnormalize(input);
            let result = null;

            // Kiểm tra các trường hợp đặc biệt (chào hỏi)
            for (const item of chatData.specialCases) {
                if (item.keywords.some(k => text.includes(k))) { 
                    result = item.reply; 
                    break; 
                }
            }

            // Sử dụng findBestMatch để tìm thuật ngữ kỹ thuật
            if (!result) {
                const match = findBestMatch(text, chatData.knowledgeBase);
                if (match) result = match.data;
            }

            if (!result) result = chatData.fallback[0];

            setTimeout(() => { renderBotMessage(result); }, 400);
        }

        function renderBotMessage(data) {
            const botRow = document.getElementById("mg-bot-temp");
            if (!botRow) return;
            botRow.id = "";
            const msgBox = botRow.querySelector(".mg-msg");
            msgBox.classList.remove("italic", "opacity-60", "text-xs");
            
            if (typeof data === 'string') {
                msgBox.innerHTML = data;
            } else {
                const imageHtml = (data.img && data.img.trim() !== "") 
                    ? `<img src="${data.img}" class="mg-card-img" alt="${data.term}" onerror="this.remove()">` 
                    : "";

                msgBox.innerHTML = `
                    <div class="mg-bot-card">
                        ${imageHtml}
                        <div class="mg-card-title-row">
                            <h4 class="mg-card-title">${data.term}</h4>
                            <div class="mg-audio-trigger" onclick="speak('${data.term}')">🔊</div>
                        </div>
                        <div class="mg-card-ipa">${data.ipa}</div>
                        <div class="mg-def-item">
                            <span class="mg-def-label">English</span>
                            <p class="mg-def-text">${data.en}</p>
                        </div>
                        <div class="mg-def-item !border-slate-400">
                            <span class="mg-def-label">Tiếng Việt</span>
                            <p class="mg-def-text">${data.vi}</p>
                        </div>
                    </div>
                `;
            }
            document.getElementById("mg-messages").scrollTop = document.getElementById("mg-messages").scrollHeight;
        }

        function speak(text) {
            window.speechSynthesis.cancel();
            const msg = new SpeechSynthesisUtterance(text);
            msg.lang = 'en-US';
            msg.rate = 0.9;
            window.speechSynthesis.speak(msg);
        }

        document.addEventListener("DOMContentLoaded", initializeChat);
    