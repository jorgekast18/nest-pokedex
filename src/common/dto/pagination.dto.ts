import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @IsNumber()
    offset?: number;

    @IsPositive()
    @IsOptional()
    @IsNumber()
    @Min(1)
    limit?: number
}