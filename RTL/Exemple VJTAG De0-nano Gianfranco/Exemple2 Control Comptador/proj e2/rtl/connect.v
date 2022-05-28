

module connect(
	tck, tdi, aclr, ir_in, v_sdr, v_udr, v_cdr, v_uir,
	d0, d1, d2, d3, d4, d5, d6, d7, tdo
	);

localparam BYPASS		= 2'b00;
localparam READCOUNT	= 2'b01;
localparam COUNT  	= 2'b10;
localparam RESCOUNT	= 2'b11;

input tck, tdi, aclr, v_sdr, v_udr, v_cdr, v_uir;
input [1:0]ir_in;
output wire  tdo, d0, d1, d2, d3, d4, d5, d6, d7;

reg [7:0]Counter = 1'b0000;
reg [1:0]DR0;
reg [7:0]DR1;
	
assign tdo = (ir_in == BYPASS) ? DR0[0] : DR1[0];

assign d0 = Counter[0];
assign d1 = Counter[1];
assign d2 = Counter[2];
assign d3 = Counter[3];
assign d4 = Counter[4];
assign d5 = Counter[5];
assign d6 = Counter[6];
assign d7 = Counter[7];

always @ (posedge tck) 
begin
	if(!aclr) begin
		DR0 <= 1'b0;
		DR1 <= 8'b00000000;
	end
	else begin
		case(ir_in)
			READCOUNT: begin
						if(v_cdr) begin
							DR1 = Counter;
						end
						else 
						begin
							if(v_sdr) begin
								DR1 = {tdi,DR1[7:1]};
							end
						end
					end
					
			COUNT: begin
						if(v_cdr) begin
							Counter=Counter+1;
							DR1 = Counter;
						end
						else 
						begin
							if(v_sdr) begin
								DR1 = {tdi,DR1[7:1]};
							end
						end
					end
					
			RESCOUNT: begin
						if(v_cdr) begin
							Counter=0;
							DR1 = Counter;
						end
						else 
						begin
							if(v_sdr) begin
								DR1 = {tdi,DR1[7:1]};
							end
						end
					end
						
			BYPASS: begin
							if(v_sdr) begin
									DR0 = {tdi,DR0[1:1]};
							end
						end
							
			default: begin
							if(v_sdr) begin
								DR0 = {tdi,DR0[1:1]};
							end
						end
							
		endcase
	end
end

	
endmodule