import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  handle: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  sku: string;

  @IsNotEmpty()
  @IsOptional()
  grams: number;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  stock: number;

  @IsNotEmpty()
  @IsOptional()
  price: number;

  @IsNotEmpty()
  @IsOptional()
  compare_price: number;

  @IsOptional()
  @IsNumber()
  @IsOptional()
  barcode?: number;
}
