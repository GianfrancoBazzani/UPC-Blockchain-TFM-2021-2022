
proc read_Counter {} {
	open_port
	device_lock -timeout 10000
	device_virtual_ir_shift -instance_index 0 -ir_value 1 -no_captured_ir_value
	set dip [device_virtual_dr_shift -dr_value 00000000 -instance_index 0 -length 8]
	
	device_virtual_ir_shift -instance_index 0 -ir_value 0 -no_captured_ir_value
	close_port
	
	puts $dip
}

proc more_count {} {
	open_port
	device_lock -timeout 10000
	device_virtual_ir_shift -instance_index 0 -ir_value 2 -no_captured_ir_value
	device_virtual_dr_shift -dr_value 00000000 -instance_index 0 -length 8 -no_captured_dr_value
	device_virtual_ir_shift -instance_index 0 -ir_value 0 -no_captured_ir_value
	close_port
}

proc res_count {} {
	open_port
	device_lock -timeout 10000
	device_virtual_ir_shift -instance_index 0 -ir_value 3 -no_captured_ir_value
	device_virtual_dr_shift -dr_value 00000000 -instance_index 0 -length 8 -no_captured_dr_value
	device_virtual_ir_shift -instance_index 0 -ir_value 0 -no_captured_ir_value
	close_port	
}

proc open_port {} {
	global usbblaster_name
	global test_device
	open_device -hardware_name $usbblaster_name -device_name $test_device
}

proc close_port {} {
	catch {device_unlock}
	catch {close_device}
}

proc connect_jtag {} {
	global usbblaster_name
	global test_device
	global displayConnect

	foreach hardware_name [get_hardware_names] {

		if { [string match "USB-Blaster*" $hardware_name] } {
			set usbblaster_name $hardware_name
		}
	}

	foreach device_name [get_device_names -hardware_name $usbblaster_name] {
		if { [string match "@1*" $device_name] } {
			set test_device $device_name
		}
	}
	set displayConnect "Connected: $hardware_name \n $device_name"
	.btnConn configure -state disabled
	.btnRead configure -state active
	.btnCount configure -state active
	.btnRescount configure -state active

}


global usbblaster_name
global test_device

set displayData "No Data Sent"
set  displayConnect "Press Connect!"

package require Tk
init_tk

wm state . normal
wm title . "FPGA Manager"
frame .frmConnection
label .lblConn -textvariable displayConnect
button .btnConn -text "Connect" -command "connect_jtag"

frame .frmCounter
button .btnCount -text "Count++" -command "more_count"
button .btnRescount -text "ResetCounter" -command "res_count"
button .btnRead -text "Read Counter" -command "read_Counter"





grid .frmConnection -in .  -row 1 -column 1 -columnspan 8
grid .btnConn -in .frmConnection -row 1 -column 1
grid .lblConn -in .frmConnection -row 2 -column 1

grid .frmCounter -in . -row 4 -column 1
grid .btnCount -in .frmCounter -row 1 -column 1
grid .btnRescount -in .frmCounter -row 1 -column 2

grid .frmCounter -in . -row 4 -column 1
grid .btnCount -in .frmCounter -row 1 -column 1
grid .btnRescount -in .frmCounter -row 1 -column 2
grid .btnRead -in .frmCounter -row 1 -column 3

.btnCount configure -state disabled
.btnRescount configure -state disabled
.btnRead configure -state disabled


tkwait window .
