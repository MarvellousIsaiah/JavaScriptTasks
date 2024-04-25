const prompt = require('prompt-sync')();
let menu = "";


function nokia_phone(){
    const menu = prompt(`
                        NOKIA PHONE MAIN MENU
                        1-> phone book
                        2-> Message
                        3-> chat
                        4-> call register
                        5-> tones
                        6-> settings
                        7-> call Divert
                        8-> games
                        9-> calculator
                        10-> Reminders
                        11-> clock
                        12-> profiles
                        13-> sim service

                select options 1 to 13 to access phone menu: `);

                switch(menu){
                    case '1':
                        console.log(phone_book());
                        break;
                    case "2":
                        console.log(message());
                        break;
                    case '3':
                        console.log("Chat");
                        break;
                    case "4":
                        console.log(register());
                        break;
                    case "5":
                        console.log(tone());
                        break;
                    case "6":
                        console.log(setting());
                        break;
                    case "7":
                        console.log("call_divert");
                        break;
                    case "8":
                        console.log("game");
                        break;
                    case "9":
                        console.log("calculator");
                        break;
                    case "10":
                        console.log("reminder");
                        break;
                    case "11":
                        console.log(clock());
                        break;
                    case "12":
                        console.log("profile");
                        break;
                    case "13":
                        console.log("sim_service");
                        break;
                    default:
                        break;
   
                }
            }

                function phone_book(){
                    let phone_book_menu = prompt(`
                        phone book:

                        1-> Search
                        2-> Servic Nos.
                        3-> Add name
                        4-> Erase
                        5-> Edit
                        6-> Assign tone
                        7-> Send b' card
                        8-> Option
                        9-> Speed dials
                        10->Voice tags

                        Select option 1 to 10 to access feature `);

                    switch(phone_book_menu){
                        case "1":
                            console.log("search Activated");
                            main_menu();
                            breaak;
                        case "2":
                            console.log("service Nos Activated");
                            main_menu();
                            break;
                        case "3":
                            console.log("Add name Activated");
                            main_menu();
                            break;
                        case "4":
                            console.log("Erase Activated");
                            main_menu();
                            break;
                        case "5":
                            console.log("Edit Activated");
                            main_menu();
                            break;
                        case "6":
                            console.log("Assign tone Activated");
                            main_menu();
                            break;
                        case "7":
                            console.log("Send b\' card Activaed");
                            main_menu();
                            break;
                        case "8":
                            console.log("Speed dail activated");
                            main_menu();
                            break;
                        case "9":
                            console.log("Voice tag ativated");
                            main_menu();
                            break;
                        default:
                            console.log("invalid option");
                            phone_book();
                    }
                }

                    function options(){
                        let option_menu = prompt(`

                                option activated

                                1-> Type of view
                                2-> Memory status

                                Select option `);

                
                    switch(option_menu){
                        case "1":
                            console.log("Type of view");
                            main_menu();
                            break;
                        case "2":
                            console.log("memory status Activated");
                            main_menu();
                            break;
                        default:
                            console.log("invalid option");
                            options();
                    }
                }

                    function main_menu(){
                        let going_back_to_main_menu = prompt("press 1 to go back to the main menu:");
                        if(going_back_to_main_menu === "1"){
                            nokia_phone();
                         }else{
                            console.log("Wrong input entered");
                            main_menu();
                         }

                    }
                    function message(){
                        let message_menu = prompt(`
                                                message
                                                1-> Write messages
                                                2-> Inbox
                                                3-> Outbox
                                                4-> Picture message
                                                5-> Templates
                                                6-> Smileys
                                                7-> Message settings
                                                8-> Info service
                                                9-> Voice mailbox number
                                                10-> Service command editor

                                                Select option: `);

                    switch(message_menu){
                        case "1":
                            console.log("write message...");
                            main_menu();
                            break;
                        case "2":
                            console.log("Welcom to inbox");
                            main_menu();
                            break;
                        case "3":
                            console.log("outbox Activated");
                            main_menu();
                            break;
                        case "4":
                            console.log("picture message Activated");
                            main_menu();
                            break;
                        case "5":
                            console.log("Templates mode is active")
                            main_menu();
                            break;
                        case "6":
                            console.log("Smileys activted");
                            main_menu();
                            break;
                        case "7":
                            console.log("Info service Activated");
                            main_menu();
                            break;
                        case "8":
                            console.log("Voice mailbox number Activated");
                            main_menu();
                            break;
                        case "9":
                            console.log("Service command Activated");
                            main_menu();
                            break;
                        default:
                            console.log("Invalid option");
                            message();    
                    }
                }
                    

                function call_register(){
                    let chart_menu = prompt(`
                    call register
                    1-> missed calls
                    2-> Received calls
                    3-> Dailled numbers
                    4-> Erase recent call lists
                    5-> Show call duration
                    6-> Show call cost
                    7-> Call cost settings
                    8-> prepaid credit
                    Select option `);

                    switch(chart_menu = prompt){
                        case "1":
                            console.log("missed calls");
                            main_menu();
                            break;
                        case "2":
                            console.log("Received calls");
                            main_menu();
                            break;
                        case "3":
                            console.log("Dialled number");
                            main_menu();
                            break;
                        case "4":
                            console.log("Erase recent call list");
                            main_menu();
                            break;
                        case "5":
                            show_call_cost();
                            break;
                        case "6":
                            show_call_cost();
                            break;
                        case "7":
                            call_cost_cost();
                            break;
                        case "8":
                            console.log("prepaid credit");
                            main_menu();
                            break;
                        default:
                            main_menu();

                            
                    } 
    
                }
                function call_cost_setting(){
                    let call_cost_setting_menu = prompt(`

                        1-> call cost limit
                        2-> show costs in
                        select option:`)
                
                switch(call_cost_setting_menu){
                    case "1":
                        console.log("call cost limit");
                        main_menu();
                        break;
                    case "2":
                        console.log("Show call cost....");
                        main_menu();
                        break;    
                    default:
                        main_menu();
                    
                    }
                }



                
                function show_call_duration(){
                    let show_call_duration_menu = prompt(`

                        show call duration
                        1-> call duration
                        2-> last calls duration
                        3->Received calls duration
                        4-> Dialled calls duration
                        5-> Clear timers

                        Select option: `);
                    switch(show_call_duration_menu){
                        case "1":
                            console.log("last call duration");
                            main_menu();
                            break;
                        case "2":
                            console.log("All calls duration");
                            main_menu();
                            break;
                        case "3":
                            console.log("Received calls duration");
                            main_menu();
                            break;
                        case "4":
                            console.log("Clear timers");
                            main_menu();
                            break;
                        default:
                           main_menu();
                        }
                }

                function show_call_cost(){
                    let show_call_cost_menu = prompt(`
                        show call cost
                        1-> last call cost
                        2-> All calls cost
                        3->Clear counters
                        select option: `);
                         
                  switch(show_call_cost_menu){
                        case "1":
                            console.log("last call cost");
                            main_menu();
                            break;
                        case "2":
                            console.log("All calls");
                            main_menu();
                            break;
                        case "3":
                            console.log("All calls cost");
                            main_menu();
                            break;
                        default:
                            main_menu();
                }
            }
            
             
           function tone() {
    let tone_menu = prompt(`
        1-> Ringing tone
        2-> Ringing volume
        3-> Incoming call alert
        4-> Composer
        5-> Message alert tone
        6-> Keypad tones
        7-> Warning and game tones
        8-> Vibrating alert
        9-> Screen saver
        Select option  `);

    switch (tone_menu) {
        case "1":
            console.log("Ringing");
            main_menu();
            break;
        case "2":
            console.log("Ringing volume");
            main_menu();
            break;
        case "3":
            console.log("Incoming call alert");
            main_menu();
            break;
        case "4":
            console.log("Composer");
            main_menu();
            break;
        case "5":
            console.log("Message alert tone");
            main_menu();
            break;
        case "6":
            console.log("Keypad tone");
            main_menu();
            break;
        case "7":
            console.log("Warning and game tones");
            main_menu();
            break;
        case "8":
            console.log("Vibrating alert");
            main_menu();
            break;
        case "9":
            console.log("Screen saver");
            main_menu();
            break;
        default:
            main_menu();
    }
}

                
                function setting(){
                    setting_menu = "";
                    let setting_menu = prompt(`
                    Setting
                    1-> call setting
                    2-> phone setting
                   3-> Security setting
                   4-> Restore factory settings
                   select option: `);
            
                switch(setting_menu){
                    case "1":
                        Call_setting();
                        break;
                    case "2": 
                        phone_setting();
                        break;
                    case "4":
                        console.log("Restore factory setting");
                        main_menu();
                        break;
                    default:
                        
                }
            }
                //main_menu();

                
                




nokia_phone()