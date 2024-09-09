import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Person } from './interfaces/person.interface';
import { v4 as uuid } from 'uuid';
import { CreatePersonDto, UpdatePersonDto } from './dto';

@Injectable()
export class PersonService {
  private persons: Person[] = [
    {
      id: uuid(),
      name: 'Luis',
      last_name: 'Bautista',
    },
    {
      id: uuid(),
      name: 'Leandro',
      last_name: 'Gongora',
    },
    {
      id: uuid(),
      name: 'Max',
      last_name: 'Quispe',
    },
  ];

  findAll() {
    return this.persons;
  }

  findId(id: string) {
    const person = this.persons.find((person) => person.id === id);
    if (!person)
      throw new NotFoundException(`Persona no encontrada con id ${id}`);
    return person;
  }

  create(createPersonDto: CreatePersonDto) {
    const person: Person = {
      id: uuid(),
      ...createPersonDto,
    };
    this.persons.push(person);
    return person;
  }

  update(id: string, updatePersonDto: UpdatePersonDto) {
    let personDB = this.findId(id);

    if (updatePersonDto.id && updatePersonDto !== id)
      throw new BadRequestException(`Persona con id invalido`);

    this.persons = this.persons.map((person) => {
      if (person.id === id) {
        personDB = { ...personDB, ...updatePersonDto, id };
        return personDB;
      }
      return person;
    });
    return personDB;
  }

  delete(id: string) {
    const person = this.findId(id);
    this.persons = this.persons.filter((person) => person.id !== id);
  }
}
