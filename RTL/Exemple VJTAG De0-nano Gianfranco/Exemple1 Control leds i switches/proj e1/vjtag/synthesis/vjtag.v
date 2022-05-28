

`timescale 1 ps / 1 ps
module vjtag (
		output wire       tdi,                // jtag.tdi
		input  wire       tdo,                //     .tdo
		output wire [1:0] ir_in,              //     .ir_in
		input  wire [1:0] ir_out,             //     .ir_out
		output wire       virtual_state_cdr,  //     .virtual_state_cdr
		output wire       virtual_state_sdr,  //     .virtual_state_sdr
		output wire       virtual_state_e1dr, //     .virtual_state_e1dr
		output wire       virtual_state_pdr,  //     .virtual_state_pdr
		output wire       virtual_state_e2dr, //     .virtual_state_e2dr
		output wire       virtual_state_udr,  //     .virtual_state_udr
		output wire       virtual_state_cir,  //     .virtual_state_cir
		output wire       virtual_state_uir,  //     .virtual_state_uir
		output wire       tck                 //  tck.clk
	);

	sld_virtual_jtag #(
		.sld_auto_instance_index ("YES"),
		.sld_instance_index      (0),
		.sld_ir_width            (2)
	) virtual_jtag_0 (
		.tdi                (tdi),                // jtag.tdi
		.tdo                (tdo),                //     .tdo
		.ir_in              (ir_in),              //     .ir_in
		.ir_out             (ir_out),             //     .ir_out
		.virtual_state_cdr  (virtual_state_cdr),  //     .virtual_state_cdr
		.virtual_state_sdr  (virtual_state_sdr),  //     .virtual_state_sdr
		.virtual_state_e1dr (virtual_state_e1dr), //     .virtual_state_e1dr
		.virtual_state_pdr  (virtual_state_pdr),  //     .virtual_state_pdr
		.virtual_state_e2dr (virtual_state_e2dr), //     .virtual_state_e2dr
		.virtual_state_udr  (virtual_state_udr),  //     .virtual_state_udr
		.virtual_state_cir  (virtual_state_cir),  //     .virtual_state_cir
		.virtual_state_uir  (virtual_state_uir),  //     .virtual_state_uir
		.tck                (tck)                 //  tck.clk
	);

endmodule
