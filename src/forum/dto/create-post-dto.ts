import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePostDto{
    // @IsNumber()
    // readonly id: number;
    @IsString()
    readonly title: string;
    @IsOptional()
    @IsDate()
    readonly date: Date;
    @IsString()
    readonly user: string;
}